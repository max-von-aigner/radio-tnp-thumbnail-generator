"use client";

import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { format } from "date-fns";
import useFontLoaded from "../hooks/useFontLoaded";
import { Button } from "@/components/ui/button";

// interface ButtonProps {
//   variant: string;
//   onClick: () => void;
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => (
//   <button onClick={onClick} className={variant}>
//     {children}
//   </button>
// );

interface ThumbnailCanvasProps {
  imageFile: File;
  mainText: string | null;
  subText: string | null;
  date: Date | null;
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
}

const ThumbnailCanvas: React.FC<ThumbnailCanvasProps> = ({
  imageFile,
  mainText,
  subText,
  date,
  startHour,
  startMinute,
  endHour,
  endMinute,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasInstance = useRef<fabric.Canvas | null>(null);
  const fontLoaded = useFontLoaded(
    "Alte Haas Grotesk",
    "/fonts/AlteHaasGroteskBold.ttf"
  );

  useEffect(() => {
    if (!fontLoaded || !canvasRef.current) return;
    const canvas = new fabric.Canvas(canvasRef.current, {
      selection: false,
    });
    canvasInstance.current = canvas;

    // Load and set the image background
    const objectURL = URL.createObjectURL(imageFile);
    fabric.Image.fromURL(
      objectURL,
      (img) => {
        const scale = Math.max(
          canvas.getWidth() / img.getScaledWidth(),
          canvas.getHeight() / img.getScaledHeight()
        );
        img.set({
          originX: "left",
          originY: "top",
          scaleX: scale,
          scaleY: scale,
        });
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          crossOrigin: "anonymous",
        });
        URL.revokeObjectURL(objectURL);
      },
      { crossOrigin: "anonymous" }
    );

    return () => {
      if (canvasInstance.current) {
        canvasInstance.current.dispose();
      }
    };
  }, [fontLoaded, imageFile]);

  useEffect(() => {
    if (!canvasInstance.current) return;
    const canvas = canvasInstance.current;

    // Clear existing texts to avoid duplicates
    canvas.getObjects("text").forEach((obj) => canvas.remove(obj));

    // Calculate positions based on whether subText is provided
    const mainTextTop = canvas.getHeight() - (subText ? 60 : 40); // Move main text up if subText is provided
    const subTextTop = canvas.getHeight() - 30; // Subtext position

    // Load and add the logo SVG at the top left
    fabric.Image.fromURL("tnpLogo.svg", (img) => {
      img.scaleToWidth(80); // Adjust as needed
      img.set({
        left: 20,
        top: 20,
      });
      canvas.add(img);
    });

    // Add main text at the bottom left
    if (mainText) {
      const textObj = new fabric.Text(mainText, {
        fontSize: 27,
        fill: "#fff",
        fontFamily: "Alte Haas Grotesk",
        left: 17,
        top: mainTextTop, // Adjust according to your needs
      });
      canvas.add(textObj);
    }

    // Add sub text at the bottom left
    if (subText) {
      const textObj = new fabric.Text(subText, {
        fontSize: 16,
        fill: "#fff",
        fontFamily: "Alte Haas Grotesk",
        left: 17,
        top: subTextTop, // Adjust according to your needs
      });
      canvas.add(textObj);
    }

    // Positioning logic for Date, Time, and Separator
    const rightPadding = 18; // Space from the right edge
    let lastTextRightPosition = canvas.getWidth() - rightPadding;

    // Time Text
    if (startHour && startMinute && endHour && endMinute) {
      const timeString = `${startHour}:${startMinute}—${endHour}:${endMinute}`;
      const timeText = new fabric.Text(timeString, {
        fontSize: 16,
        fill: "#ffffff",
        fontFamily: "Alte Haas Grotesk",
        top: 15, // Adjust top position as needed
      });
      canvas.add(timeText);
      timeText.set({
        left: lastTextRightPosition - (timeText.width || 0),
      });
      lastTextRightPosition -= (timeText.width || 0) + 5; // Adjust space between elements
    }

    // Separator
    const separator = new fabric.Text("|", {
      fontSize: 16,
      fill: "#ffffff",
      fontFamily: "Alte Haas Grotesk",
      top: 15, // Align vertically with the date and time
    });
    canvas.add(separator);
    separator.set({
      left: lastTextRightPosition - (separator.width ?? 0),
    });
    lastTextRightPosition -= (separator.width ?? 0) + 5;

    // Date
    if (date) {
      const formattedDateForCanvas = format(date, "dd.MM");

      const dateText = new fabric.Text(formattedDateForCanvas, {
        fontSize: 16,
        fill: "#ffffff",
        fontFamily: "Alte Haas Grotesk",
        top: 15, // Align vertically with the time
      });
      canvas.add(dateText);
      dateText.set({
        left: lastTextRightPosition - (dateText.width ?? 0),
      });
    }

    // Static text below the date and time, rotated 90 degrees counter-clockwise
    const staticTextString = "radio-tnp.com";
    const staticText = new fabric.Text(staticTextString, {
      fontSize: 16,
      fill: "#ffffff",
      fontFamily: "Alte Haas Grotesk",
      // Rotate text 90 degrees clockwise
      angle: 90,
      // Manually set the position; adjust these values as needed to align properly
      left: 486, // Adjust this value to position it closer to or further from the right edge
      top: 37, // Adjust this value to position it closer to or further from the date/time string
    });

    // Since we're manually setting the position, we don't need to calculate width/height adjustments
    canvas.add(staticText);

    canvas.renderAll();
  }, [
    imageFile,
    mainText,
    subText,
    date,
    startHour,
    startMinute,
    endHour,
    endMinute,
  ]);

  const handleDownload = () => {
    const formattedDateForFileName = date ? format(date, "dd-MM-yyyy") : "";
    const fileName = mainText || "thumbnail";
    const canvas = canvasInstance.current;
    if (!canvas) return;
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1.0,
      multiplier: 4,
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `${fileName}-${formattedDateForFileName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col">
      <canvas
        ref={canvasRef}
        width="500"
        height="500"
        style={{ width: "500px", height: "500px" }}
      ></canvas>
      <Button
        variant="outline"
        onClick={handleDownload}
        className="mt-10 w-36 mx-auto shadow-xl"
      >
        Download Image
      </Button>
    </div>
  );
};

export default ThumbnailCanvas;
