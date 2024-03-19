"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SubTitleInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const SubTitleInput: React.FC<SubTitleInputProps> = ({ text, setText }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Label htmlFor="show-name">Show Name</Label>
      <Input
        id="show-name"
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Show Name"
      />
    </div>
  );
};

export default SubTitleInput;
