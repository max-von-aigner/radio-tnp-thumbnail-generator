import { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

const useFontLoaded = (fontName: string, fontUrl: string): boolean => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    if (!fontName || !fontUrl) return;

    const font = new FontFaceObserver(fontName);

    font
      .load(null, 5000)
      .then(() => {
        setIsFontLoaded(true);
      })
      .catch(() => {
        console.error(`The font ${fontName} failed to load.`);
      });
  }, [fontName, fontUrl]);

  return isFontLoaded;
};

export default useFontLoaded;
