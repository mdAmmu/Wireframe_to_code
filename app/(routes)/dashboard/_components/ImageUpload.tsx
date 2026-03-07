"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload, Loader2Icon, WandSparkles, X } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
// @ts-ignore
import uuid4 from "uuid4";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/firebaseConfig'
import  axios  from "axios";
import { useAuthContext } from "@/app/provider";
import { useRouter } from "next/navigation";
import { Constants } from "@/data/Constants";


const ImageUpload = () => {

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<any>();
  const [model, setModel] = useState<string>();
  const [description, setDescription] = useState<string>();
  const { user } = useAuthContext()
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log(files[0]);
      const imageUrl = URL.createObjectURL(files[0]);
      setFile(files[0]);
      setPreviewUrl(imageUrl);
    }
  };

  const OnConverToCodeButtonClick = async () => {
    if (!file || !model || !description)
    {
      console.log("Select All field");
    }
    setLoading(true);

    const fileName = Date.now() + '.png';
    const imageRef = ref(storage, "Wireframe to code" + fileName)
    await uploadBytes(imageRef, file).then(resp => {
      console.log("Image Uploaded...")
    });
    
    const imageUrl = await getDownloadURL(imageRef);
    console.log(imageUrl);

    const uid = uuid4()
    console.log(uid);
    const result = await axios.post('/api/wireframe-to-code', {
      uid: uid,
      description: description,
      imageUrl: imageUrl,
      model: model,
      email: user?.email,
    });
    console.log(result.data);
    setLoading(false);
    router.push('/view-code/' + uid)
  }

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {!previewUrl ? (
          <div
            className="p-7 border border-dashed rounded-md shadow-md
        flex flex-col items-center justify-center"
          >
            <CloudUpload className="w-10 h-10" />
            <h2 className="font-bold text-lg">Upload Image</h2>
            <p className="text-gray-400 mt-3">Upload your wireframe here</p>
            <div className="mt-16 ">
              <label htmlFor="imageSelect">
                <h2 className="p-2 inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 ">
                  Select Image
                </h2>
              </label>
            </div>
            <input
              type="file"
              id="imageSelect"
              className="hidden"
              multiple={false}
              onChange={OnImageSelect}
            />
          </div>
        ) : (
          <div className="p-5 border border-dashed">
            <X
              className="cursor-pointer  "
              onClick={() => setPreviewUrl(null)}
            />
            <Image
              src={previewUrl}
              alt="preview"
              width={400}
              height={400}
              priority={true}  
              className="w-full h-[500px] object-content pl-5"
            />
          </div>
        )}
        <div className="p-7 border shadow-md rounded-lg">
          <h2>Select AI Model</h2>

          <Select onValueChange={(value)=>setModel(value)} >
            <SelectTrigger className="w-[180px] px-1">
              <SelectValue placeholder="Select  AI Model"/>
            </SelectTrigger>
            <SelectContent className=" bg-white">
              {Constants?.AiModelList.map((model, index) => (
                <SelectItem value={model.icon} key={index}>
                  <div className="flex items-center gap-2 py-1 px-2">
                    <Image
                      src={model.icon}
                      alt={model.name}
                      width={25}
                      height={25}
                      className="w-6 h-auto"/>
                    <h2>{model.name}</h2>
                  </div>
                  
                </SelectItem>  
              ))}
            </SelectContent>
          </Select>

          <h2 className="font-bold text-lg pb-5">
            Describe what you want in website
          </h2>
          <Textarea
            onChange={(event) =>setDescription(event?.target.value)}
            className="pt-3 px-3 h-[200px]"
            placeholder="Write about your web page"
          />
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Button className=" bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700" onClick={OnConverToCodeButtonClick} disabled={loading}>
          {loading ? <Loader2Icon className="animate-spin" /> : <WandSparkles />} Convert to Code
        </Button>
      </div>
    </div>

    
  );
};

export default ImageUpload;
