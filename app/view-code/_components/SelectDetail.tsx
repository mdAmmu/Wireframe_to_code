import React, { useState } from 'react'
// import { RECORD } from "../[uid]/page"
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { RefreshCcw, Send, Loader2, ImagePlus, X } from 'lucide-react'

const SelectDetail = ({ record, regenerateCode, isReady, handleEditCode, updateLoading }: any) => {
  const [instructions, setInstructions] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
      setPreviewUrl(URL.createObjectURL(files[0]));
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  const onSubmitEdit = async () => {
    if (!instructions.trim()) return;
    await handleEditCode(instructions, file);
    setInstructions('');
    removeFile();
  };

  return record && (
    <div className='p-5 bg-gray-100 rounded-lg flex flex-col gap-3'>
      <div>
        <h2 className='font-bold my-2'>Wireframe</h2>
        <Image src={record?.imageUrl} alt='Wireframe' width={300} height={400}
          className='rounded-lg object-contain h-[180px] w-full border border-dashed p-2 bg-white' />
      </div>
      
      <div>
        <h2 className='font-bold mb-2'>AI Model</h2>
        <Input defaultValue={record?.model} disabled={true} className='bg-white' />
      </div>

      <div className='border-t pt-4 mt-2'>
        <h2 className='font-bold mb-2 text-[#372f93]'>Request Modifications</h2>
        
        {previewUrl && (
          <div className="relative mb-2 w-full h-[120px] border rounded-lg bg-white p-2">
            <button 
              type="button" 
              onClick={removeFile}
              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
            >
              <X className="h-3 w-3" />
            </button>
            <Image 
              src={previewUrl} 
              alt="Edit attachment preview" 
              fill 
              className="object-contain" 
            />
          </div>
        )}

        <Textarea 
          placeholder='e.g., Replace the logo with this new image, change background color...' 
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          disabled={!isReady || updateLoading}
          className='bg-white h-[120px] mb-3'
        />

        <div className="flex gap-2 mb-3">
          <label 
            htmlFor="editImageSelect" 
            className={`flex-1 flex items-center justify-center gap-2 p-2 border border-dashed rounded-md cursor-pointer hover:bg-white transition-all text-sm font-medium ${(!isReady || updateLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ImagePlus className="h-4 w-4 text-gray-500" />
            <span>{file ? 'Change Image' : 'Attach Image'}</span>
          </label>
          <input
            type="file"
            id="editImageSelect"
            className="hidden"
            accept="image/*"
            disabled={!isReady || updateLoading}
            onChange={OnImageSelect}
          />
        </div>

        <Button 
          onClick={onSubmitEdit} 
          disabled={!isReady || updateLoading || !instructions.trim()} 
          className='w-full bg-[#372f93] hover:bg-[#2b2474] flex gap-2'
        >
          {updateLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <Send className="h-4 w-4" />}
          Apply Changes
        </Button>
      </div>
      
      <Button onClick={regenerateCode} disabled={!isReady || updateLoading} className='mt-2 w-full border border-[#372f93] text-[#372f93] bg-transparent hover:bg-[#372f93]/10 flex gap-2'>
        <RefreshCcw className="h-4 w-4"/>
        Regenerate Code
      </Button>
    </div>
  )
}

export default SelectDetail