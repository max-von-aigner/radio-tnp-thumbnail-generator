"use client";

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ThumbnailCanvas from "./ThumbnailCanvas";
import ShowTitleInput from "./ShowNameInput";
import { DatePicker } from "./DatePicker";
import TimeInput from "./TimeInput";

const ThumbnailGenerator = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  //   const [text, setText] = useState<string>(" ");
  const [text, setText] = useState<string>("");
  // In ThumbnailGenerator component
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="flex ">
      <div className="flex flex-col space-y-5">
        {/* Component to upload an image */}
        <ImageUpload setImageFile={setImageFile} />
        {/* Component to input text */}
        <ShowTitleInput text={text} setText={setText} />
        {/* Component to display the thumbnail canvas */}

        <DatePicker
          setDateExternal={setSelectedDate as (date: Date | undefined) => void}
        ></DatePicker>
        <TimeInput></TimeInput>
      </div>
      <div>
        {imageFile && (
          <ThumbnailCanvas
            imageFile={imageFile}
            text={text}
            date={selectedDate}
          />
        )}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
