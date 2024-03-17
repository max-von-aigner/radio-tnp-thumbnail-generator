"use client";

import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import OpacitySlider from "./OpacitySlider";

interface ThumbnailCanvasProps {
  imageFile: File;
  text: string | null;
  date: Date | null;
}

const ThumbnailCanvas: React.FC<ThumbnailCanvasProps> = ({
  imageFile,
  text,
  date,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasInstance = useRef<fabric.Canvas | null>(null);
  const [overlayOpacity, setOverlayOpacity] = useState<number>(0); // Controls the overlay for darkness

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      selection: false,
    });
    canvasInstance.current = canvas;

    const objectURL = URL.createObjectURL(imageFile);
    fabric.Image.fromURL(
      objectURL,
      (img) => {
        const scale = Math.max(
          canvas.getWidth() / (img.width ?? 1),
          canvas.getHeight() / (img.height ?? 1)
        );
        // Apply scale and centering
        img.set({
          scaleX: scale,
          scaleY: scale,
          left: (canvas.getWidth() - (img.width ?? 1) * scale) / 2,
          top: (canvas.getHeight() - (img.height ?? 1) * scale) / 2,
          originX: "center",
          originY: "center",
          // Make the image selectable and movable
          selectable: true,
          evented: true,
        });

        // Instead of setting it as a background, add it to the canvas directly
        canvas.add(img);
        // Send the image to the back so it acts as a background
        img.moveTo(0);

        // Optional: lock scaling and rotation if you only want the image to be movable
        img.set({
          lockScalingX: true,
          lockScalingY: true,
          lockRotation: true,
        });

        URL.revokeObjectURL(objectURL);
      },
      { crossOrigin: "anonymous" }
    );

    return () => {
      canvas.dispose();
    };
  }, [imageFile]);

  useEffect(() => {
    const canvas = canvasInstance.current;
    if (!canvas) return;

    const overlay = canvas.getObjects().find((obj) => obj.type === "rect");
    if (overlay) {
      overlay.set({ opacity: overlayOpacity });
    }

    // Remove existing text/date objects
    const texts = canvas.getObjects("text");
    texts.forEach((text) => canvas.remove(text));

    // Add or update text
    if (text) {
      const textObj = new fabric.Text(text, {
        fontSize: 20,
        fill: "#fff",
        left: 10,
        top: 10,
      });
      canvas.add(textObj);
    }

    // Add or update date
    if (date) {
      const formattedDate = format(date, "PPP");
      const dateObj = new fabric.Text(formattedDate, {
        fontSize: 20,
        fill: "#fff",
        left: 10,
        top: 35,
      });
      canvas.add(dateObj);
    }

    canvas.renderAll();
  }, [text, date, overlayOpacity]);

  const handleDownload = () => {
    const canvas = canvasInstance.current;
    if (!canvas) return;

    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1.0,
    });

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "thumbnail.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <canvas ref={canvasRef} width="500" height="500"></canvas>
      <Button variant="outline" onClick={handleDownload}>
        Download Image
      </Button>
      {/* <OpacitySlider
        updateOpacity={(opacity: number) => setOverlayOpacity(opacity)}
      /> */}
    </div>
  );
};

export default ThumbnailCanvas;
