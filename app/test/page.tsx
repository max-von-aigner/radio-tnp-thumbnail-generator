"use client";

import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ThumbnailCanvas from "../components/AlphaThumbnailCanvas";
import ShowTitleInput from "../components/ShowNameInput";
import { DatePicker } from "../components/DatePicker";
import TimeInput from "../components/TimeInput";

const ThumbnailGenerator = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  //   const [text, setText] = useState<string>(" ");
  const [text, setText] = useState<string>("");
  // In ThumbnailGenerator component
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startHour, setStartHour] = useState("00");
  const [startMinute, setStartMinute] = useState("00");
  const [endHour, setEndHour] = useState("00");
  const [endMinute, setEndMinute] = useState("00");

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
          startHour={startHour}
          setStartHour={setStartHour}
          startMinute={startMinute}
          setStartMinute={setStartMinute}
          endHour={endHour}
          setEndHour={setEndHour}
          endMinute={endMinute}
          setEndMinute={setEndMinute}
        ></TimeInput>
      </div>
      <div>
        {imageFile && (
          <ThumbnailCanvas
            imageFile={imageFile}
            text={text}
            date={selectedDate}
            startHour={startHour}
            startMinute={startMinute}
            endHour={endHour}
            endMinute={endMinute}
          />
        )}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
