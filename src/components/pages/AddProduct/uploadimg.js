import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function ImageUpload() {
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Chỉ chấp nhận một tệp ảnh đầu tiên (có thể điều chỉnh tùy ý)
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className="border-2 border-dashed p-4">
        <input {...getInputProps()} />
        <p>Kéo và thả hoặc nhấn để tải lên ảnh</p>
      </div>
      {image && (
        <div className="mt-4">
          <img src={image} alt="Tải lên ảnh" className="max-w-full max-h-96" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
