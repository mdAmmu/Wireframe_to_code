"use client";
import AppHeader from "@/app/_components/AppHeader";
import { Constants } from "@/data/Constants";
import { Description } from "@radix-ui/react-dialog";
import axios from "axios";
import { Loader2, LoaderCircle } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SelectDetail from "../_components/SelectDetail";
import CodeEditor from "../_components/CodeEditor";

export interface RECORD {
  id: number;
  description: string;
  code: any;
  imageUrl: string;
  model: string;
  createBy: string;
  uid: string;
}

const ViewCode = () => {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [codeResp, setCodeResp] = useState("");
  const [record, setRecord] = useState<RECORD | null>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    uid && GetRecordInfo();
  }, [uid]);

  const GetRecordInfo = async () => {
    setLoading(true);
    setCodeResp('');
    setIsReady(false);
    const result = await axios.get("/api/wireframe-to-code?uid=" + uid);
    console.log(result.data);
    const resp = result?.data;
    setRecord(result?.data);
    if (resp?.code == null) {
      GenerateCode(resp);
    }
    else {
      let dbCode = resp?.code?.resp || "";
      const codeBlockMatch = dbCode.match(/```(?:tsx|jsx|js|typescript|javascript)?\n([\s\S]*?)\n```/);
      if (codeBlockMatch) {
        dbCode = codeBlockMatch[1];
      } else {
        const importIndex = dbCode.indexOf("import");
        if (importIndex !== -1) {
          dbCode = dbCode.substring(importIndex);
        }
      }
      dbCode = dbCode.replace(/^```[a-zA-Z]*\s*/g, "");
      dbCode = dbCode.replace(/```\s*$/g, "");

      setCodeResp(dbCode);
      setLoading(false);
      setIsReady(true);
    }
    if (resp?.error) {
      console.log("No Record Found");
    }
  
    setLoading(false);
  };

  const GenerateCode = async (record: RECORD) => {
    setLoading(true);
    const res = await fetch("/api/ai-model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: record?.description + ":" + Constants.PROMPT,
        model: record.model,
        imageUrl: record?.imageUrl,
      }),
    });

    if (!res.body) return;
    setLoading(false);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let accumulatedCode = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value);
      accumulatedCode += text;
      
      // Real-time progressive cleaning for smooth UI streaming
      const cleanChunk = text.replace(/```tsx|```jsx|```javascript|```typescript|```js|```/g, "");
      setCodeResp((prev) => prev + cleanChunk);
    }

    // Robust extraction of React code
    let finalCleanCode = accumulatedCode;
    const codeBlockMatch = accumulatedCode.match(/```(?:tsx|jsx|js|typescript|javascript)?\n([\s\S]*?)\n```/);
    if (codeBlockMatch) {
      finalCleanCode = codeBlockMatch[1];
    } else {
      const importIndex = finalCleanCode.indexOf("import");
      if (importIndex !== -1) {
        finalCleanCode = finalCleanCode.substring(importIndex);
      }
    }

    finalCleanCode = finalCleanCode.replace(/^```[a-zA-Z]*\s*/g, "");
    finalCleanCode = finalCleanCode.replace(/```\s*$/g, "");

    setCodeResp(finalCleanCode);
    setIsReady(true);
    UpdateCodeToDb(finalCleanCode, record?.uid);
  };

  const handleEditCode = async (userInstructions: string, imageFile?: File | null) => {
    setUpdateLoading(true);
    setIsReady(false);
    const previousCode = codeResp;
    setCodeResp("");

    try {
      let uploadedImageUrl = record?.imageUrl;

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const uploadRes = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          uploadedImageUrl = uploadData.imageUrl;
          console.log("New image uploaded for edit:", uploadedImageUrl);
        } else {
          console.error("New image upload failed");
        }
      }

      const res = await fetch("/api/ai-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: record?.model,
          imageUrl: uploadedImageUrl,
          isEdit: true,
          existingCode: previousCode,
          userInstructions: userInstructions,
        }),
      });

      if (!res.body) return;
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedCode = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);
        accumulatedCode += text;
        
        const cleanChunk = text.replace(/```tsx|```jsx|```javascript|```typescript|```js|```/g, "");
        setCodeResp((prev) => prev + cleanChunk);
      }

      // Robust extraction of React code
      let finalCleanCode = accumulatedCode;
      const codeBlockMatch = accumulatedCode.match(/```(?:tsx|jsx|js|typescript|javascript)?\n([\s\S]*?)\n```/);
      if (codeBlockMatch) {
        finalCleanCode = codeBlockMatch[1];
      } else {
        const importIndex = finalCleanCode.indexOf("import");
        if (importIndex !== -1) {
          finalCleanCode = finalCleanCode.substring(importIndex);
        }
      }

      finalCleanCode = finalCleanCode.replace(/^```[a-zA-Z]*\s*/g, "");
      finalCleanCode = finalCleanCode.replace(/```\s*$/g, "");

      setCodeResp(finalCleanCode);
      setIsReady(true);
      UpdateCodeToDb(finalCleanCode, record?.uid);
    } catch (error) {
      console.error("Error editing code:", error);
    } finally {
      setUpdateLoading(false);
    }
  };

  const UpdateCodeToDb = async (newCode: string, recordUid?: string) => {
    const targetUid = recordUid || record?.uid;
    if (!targetUid) return;

    const result = await axios.put('/api/wireframe-to-code', {
      uid: targetUid,
      codeResp: { resp: newCode },
    });
    console.log("Response from PUT:", result.data);
    setRecord((prev: any) => ({
      ...prev,
      code: { resp: newCode }
    }));
  };

  return (
    <div>
      <AppHeader hideSideBar={true} />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5 gap-10">
        <div>
          <SelectDetail 
            record={record} 
            regenerateCode={GetRecordInfo} 
            isReady={isReady} 
            handleEditCode={handleEditCode}
            updateLoading={updateLoading}
          />
        </div>
        <div className="col-span-4">
          {loading ? <div>
            <h2 className="font-bold text-2xl text-center p-20 flex items-center justify-center bg-slate-100 h-[90vh] rounded-xl"> <Loader2 className="animate-spin"/>Anaylzing the wireframe....</h2>
          </div> :
            <CodeEditor codeResp={codeResp} isReady={isReady}  />}
        </div>
      </div>
    </div>
  );
};

export default ViewCode;