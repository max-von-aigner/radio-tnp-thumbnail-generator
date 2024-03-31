// not hooked up to the rest of the app yet

import React from "react";

interface DownloadButtonProps {
  getCanvas: () => fabric.Canvas | null; // Function to get the current fabric.Canvas instance
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ getCanvas }) => {
  const handleDownload = () => {
    const canvas = getCanvas();
    if (canvas) {
      // Convert the canvas to a data URL
      const imageURL = canvas.toDataURL({
        format: "png",
        quality: 1.0,
      });

      // Create a temporary anchor element and trigger a download
      const downloadLink = document.createElement("a");
      downloadLink.href = imageURL;
      downloadLink.download = "thumbnail.png"; // Name of the downloaded file
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink); // Clean up
    }
  };

  return <button onClick={handleDownload}>Download Image</button>;
};

export default DownloadButton;
