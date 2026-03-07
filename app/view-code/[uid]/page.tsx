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
      setCodeResp(resp?.code?.resp);
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
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = (decoder.decode(value)).replace('```tsx', '').replace('```', '');
      setCodeResp((prev) => prev + text);
      console.log(text);
    }
    // setLoading(false);
    setIsReady(true);
    
  };

  useEffect(() => {
    if (codeResp != '' && record?.uid && isReady && record?.code == null)
    {
      UpdateCodeToDb();
    }
  },[codeResp&&record])

  const UpdateCodeToDb = async () => {
    const result = await axios.put('/api/wireframe-to-code', {
      uid: record?.uid,
      codeResp: { resp: codeResp },
    });
    console.log("Response from PUT:", result.data);


    // console.log(result);
  }
  
  

  return (
    <div>
      <AppHeader hideSideBar={true} />
      <div className="grid grid-cols-1 md:grid-cols-5 p-5 gap-10">
        <div>
          <SelectDetail record={record} regenerateCode={GetRecordInfo} isReady={isReady} />
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