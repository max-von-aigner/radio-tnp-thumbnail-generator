"use client";

import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ThumbnailCanvas from "../components/ThumbnailCanvas";
import MainTitleInput from "../components/MainTitleInput";
import { DatePicker } from "../components/DatePicker";
import TimeInput from "../components/TimeInput";
import SubTitleInput from "../components/SubTitleInput";
import { Card } from "@/components/ui/card";
import OpacitySlider from "./OpacitySlider";

const ThumbnailGenerator = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [mainText, setMainText] = useState<string>("");
  const [subText, setSubText] = useState<string>("");

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startHour, setStartHour] = useState("00");
  const [startMinute, setStartMinute] = useState("00");
  const [endHour, setEndHour] = useState("00");
  const [endMinute, setEndMinute] = useState("00");
  const [shadowOpacity, setShadowOpacity] = useState(0);

  return (
    <div className="flex flex-col w-60 lg:w-full lg:flex-row lg:space-x-10">
      {/* <div className="flex flex-col  lg:flex-1" id=""> */}
      <Card className=" w-80 lg:w-96 space-y-5 p-4 bg-stone-100 shadow-2xl  mx-auto">
        {/* Component to upload an image */}
        <ImageUpload setImageFile={setImageFile} />
        {/* Component to input text */}
        <MainTitleInput text={mainText} setText={setMainText} />
        {/* Component to display the thumbnail canvas */}
        <SubTitleInput text={subText} setText={setSubText} />
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

        <OpacitySlider
          onChange={(value: number) => setShadowOpacity(value)}
          value={shadowOpacity}
        ></OpacitySlider>
      </Card>
      {/* </div> */}
      <div className="flex-2 h-[300px] w-[300px] lg:w-[500px] lg:h-[500px]  shadow-xl bg-stone-200 text-center relative">
        <span
          className="text-3xl items-center absolute top-1/2 mx-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-500"
          style={{
            fontFamily: "Alte Haas Grotesk",
          }}
        >
          Upload an Image
        </span>

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
            shadowOpacity={shadowOpacity}
          />
        )}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
