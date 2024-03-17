"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import ThumbnailCanvas from "./ThumbnailCanvas";
import ShowNameInput from "./ShowNameInput";

// const ImageUpload = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [text, setText] = useState<string>("Your Text Here");

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files ? event.target.files[0] : null;
//     setSelectedFile(file);
//   };

//   return (
//     <div>
//       <Label htmlFor="picture">Picture</Label>
//       <Input
//         id="picture"
//         type="file"
//         onChange={handleFileChange}
//         accept="image/*"
//       />

//       {selectedFile && <ThumbnailCanvas imageFile={selectedFile} text={text} />}
//       <ShowNameInput setText={text}></ShowNameInput>
//     </div>
//   );
// };

// export default ImageUpload;

interface ImageUploadProps {
  setImageFile: (file: File | null) => void; // setImageFile is a function taking File | null.
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImageFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setImageFile(file);
  };

  return (
    <div>
      <Label htmlFor="picture">Image</Label>
      <Input
        id="picture"
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

export default ImageUpload;

// interface ImageUploadProps {
//   setImageFile: (file: File | null) => void; // setImageFile is a function taking File | null.
// }

// const ImageUpload = () => {
//   return (
//     <div className="grid w-full max-w-sm items-center gap-1.5">
//       <Label htmlFor="picture">Picture</Label>
//       <Input id="picture" type="file" />
//     </div>
//   );
// };

// export default ImageUpload;
