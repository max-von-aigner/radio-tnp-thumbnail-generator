import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TimeInput() {
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  // Generate options for hours (00-23)
  const hours = Array.from({ length: 24 }, (_, index) =>
    index.toString().padStart(2, "0")
  );

  // Generate options for minutes (00-59)
  const minutes = Array.from({ length: 60 }, (_, index) =>
    index.toString().padStart(2, "0")
  );

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <Label htmlFor="time">From</Label>
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
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          :
          <select value={minute} onChange={(e) => setMinute(e.target.value)}>
            {minutes.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="time">Until</Label>
        <div className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            {hours.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          :
          <select value={minute} onChange={(e) => setMinute(e.target.value)}>
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
}

export default TimeInput;
