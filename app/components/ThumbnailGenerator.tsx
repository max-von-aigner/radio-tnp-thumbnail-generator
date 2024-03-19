"use client";

import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import ThumbnailCanvas from "./ThumbnailCanvas";
import ShowTitleInput from "./MainTitleInput";
import { DatePicker } from "./DatePicker";
import TimeInput from "./TimeInput";
import AlphaThumbnailCanvas from "./AlphaThumbnailCanvas";

const ThumbnailGenerator = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  //   const [text, setText] = useState<string>(" ");
  const [mainText, setMainText] = useState<string>("");
  const [subText, setSubText] = useState<string>("");
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
        <ShowTitleInput text={mainText} setText={setMainText} />
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
            mainText={mainText}
            subText={subText}
            date={selectedDate}
            startHour={hour}
            startMinute={minute}
            endHour={hour}
            endMinute={minute}
          ></AlphaThumbnailCanvas>
        )}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
