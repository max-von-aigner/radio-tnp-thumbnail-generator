import React from "react";
import { Label } from "@/components/ui/label";

interface TimeInputProps {
  startHour: string;
  setStartHour: (hour: string) => void;
  startMinute: string;
  setStartMinute: (minute: string) => void;
  endHour: string;
  setEndHour: (hour: string) => void;
  endMinute: string;
  setEndMinute: (minute: string) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({
  startHour,
  setStartHour,
  startMinute,
  setStartMinute,
  endHour,
  setEndHour,
  endMinute,
  setEndMinute,
}) => {
  // Your existing implementation, now directly using the props

  // Generate options for hours (00-23)
  const hours = Array.from({ length: 24 }, (_, index) =>
    index.toString().padStart(2, "0")
  );

  // Generate options for minutes (00-59)
  const minutes = Array.from({ length: 60 }, (_, index) =>
    index.toString().padStart(2, "0")
  );

  return (
    <div className="flex flex-row space-x-3">
      <div className="flex flex-col">
        <Label htmlFor="time" className="pb-1">
          From
        </Label>
        {/* <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            {hours.map((h) => (
              <DropdownMenuItem key={h} value={h}>
                {h}
              </DropdownMenuItem>
            ))}
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <select
            value={startHour}
            onChange={(e) => setStartHour(e.target.value)}
          >
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          :
          <select
            value={startMinute}
            onChange={(e) => setStartMinute(e.target.value)}
          >
            {minutes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="time" className="pb-1">
          Until
        </Label>
        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <select value={endHour} onChange={(e) => setEndHour(e.target.value)}>
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          :
          <select
            value={endMinute}
            onChange={(e) => setEndMinute(e.target.value)}
          >
            {minutes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TimeInput;
