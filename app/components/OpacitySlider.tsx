interface OpacitySliderProps {
  updateOpacity: (opacity: number) => void;
}

const OpacitySlider: React.FC<OpacitySliderProps> = ({ updateOpacity }) => {
  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert the string value to a number and divide by 100 for percentage to decimal conversion
    const newOpacity = Number(event.target.value) / 100;
    updateOpacity(newOpacity);
  };

  return (
    <div>
      <label htmlFor="opacity">Image Opacity: </label>
      <input
        id="opacity"
        type="range"
        min="0"
        max="100"
        defaultValue="100" // Start with full opacity
        onChange={handleOpacityChange}
      />
    </div>
  );
};

export default OpacitySlider;
