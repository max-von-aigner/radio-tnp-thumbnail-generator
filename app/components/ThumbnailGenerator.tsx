"use client";

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ThumbnailCanvas from "./ThumbnailCanvas";
import ShowTitleInput from "./ShowNameInput";
import { DatePicker } from "./DatePicker";
import TimeInput from "./TimeInput";
import AlphaThumbnailCanvas from "./AlphaThumbnailCanvas";

const ThumbnailGenerator = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  //   const [text, setText] = useState<string>(" ");
  const [text, setText] = useState<string>("");
  // In ThumbnailGenerator component
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

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
        <TimeInput
          hour={hour}
          setHour={setHour}
          minute={minute}
          setMinute={setMinute}
        />
      </div>
      <div>
        {imageFile && (
          // <ThumbnailCanvas
          //   imageFile={imageFile}
          //   text={text}
          //   date={selectedDate}
          // />
          <AlphaThumbnailCanvas
            imageFile={imageFile}
            text={text}
            date={selectedDate}
            hour={hour}
            minute={minute}
          ></AlphaThumbnailCanvas>
        )}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
