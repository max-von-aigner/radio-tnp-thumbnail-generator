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
    setText(event.target.value.toUpperCase());
  };

  return (
    <div>
      <Label htmlFor="sub-title">Subtitle</Label>
      <Input
        id="sub-title"
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="w/ Alexandra Marr"
      />
    </div>
  );
};

export default SubTitleInput;
