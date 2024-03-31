import { Slider } from "@/components/ui/slider";
import { Dispatch, SetStateAction, useState } from "react";
import { Label } from "@/components/ui/label";

interface OpacitySliderProps {
  value: number; // The current value of the slider
  onChange: (value: number) => void; // Function to call when the value changes
}

const OpacitySlider: React.FC<OpacitySliderProps> = ({ value, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <Label className="pb-2">Shadow</Label>

      <Slider
        min={0}
        max={0.6}
        step={0.001}
        value={[value]} // Use the current value for the Slider
        onValueChange={(valueArray) => onChange(valueArray[0])} // Directly use onChange prop
        orientation="horizontal"
        defaultValue={[0]}
        className="min-w-80 bg-gray-800  rounded-lg cursor-pointer w-20"
      ></Slider>

      {/* <input
        type="range"
        min={0}
        max={0.6}
        step={0.05}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="min-w-80 bg-gray-800  rounded-lg cursor-pointer"
        defaultValue={0}
      /> */}
    </div>
  );
};

export default OpacitySlider;
