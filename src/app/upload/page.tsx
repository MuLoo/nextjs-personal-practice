"use client"

import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && <CldImage src={publicId} alt="image" width={200} height={100}/>}
      <CldUploadWidget uploadPreset='xtnhmpzn' onUpload={(result, widget) => { 
          console.log(result)
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
      }}
        options={{
          sources: ['local'],
          multiple: true,
          maxFileSize: 1024 * 1024 * 2
        }}
      >
        {({ open }) => <button className='btn btn-primary' onClick={() => open()}>上传</button>}
        </CldUploadWidget>
      </>
  )
}

export default UploadPage