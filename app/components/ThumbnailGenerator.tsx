"use client";

import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ThumbnailCanvas from "../components/ThumbnailCanvas";
import ShowTitleInput from "../components/MainTitleInput";
import { DatePicker } from "../components/DatePicker";
import TimeInput from "../components/TimeInput";
import SubTitleInput from "../components/SubTitleInput";
import { Card } from "@/components/ui/card";

const ThumbnailGenerator = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  //   const [text, setText] = useState<string>(" ");

  const [mainText, setMainText] = useState<string>("");
  const [subText, setSubText] = useState<string>("");
  // In ThumbnailGenerator component
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startHour, setStartHour] = useState("00");
  const [startMinute, setStartMinute] = useState("00");
  const [endHour, setEndHour] = useState("00");
  const [endMinute, setEndMinute] = useState("00");

  return (
    <div className="flex space-x-10">
      <div className="flex flex-col  flex-1">
        <Card className="space-y-5 p-4 bg-stone-100 shadow-2xl">
          {/* Component to upload an image */}
          <ImageUpload setImageFile={setImageFile} />
          {/* Component to input text */}
          <ShowTitleInput text={mainText} setText={setMainText} />
          {/* Component to display the thumbnail canvas */}
          <SubTitleInput text={subText} setText={setSubText} />

          <DatePicker
            setDateExternal={
              setSelectedDate as (date: Date | undefined) => void
            }
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
        </Card>
      </div>
      <div className="flex-2 w-[550px] h-[550px] shadow-xl bg-stone-200">
        {imageFile && (
          <ThumbnailCanvas
            imageFile={imageFile}
            mainText={mainText}
            subText={subText}
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
