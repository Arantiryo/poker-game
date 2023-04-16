import { FC, useState } from "react";

type BetSliderProps = {
  minValue: number;
  maxValue: number;
};

const BetSlider: FC<BetSliderProps> = ({ minValue, maxValue }) => {
  const [value, setValue] = useState(minValue);

  const parseValue = (s: string) => {
    const value = parseInt(s);
    return value >= minValue && value <= maxValue ? value : maxValue;
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("change");
    setValue(parseInt(event.currentTarget.value));
  };

  const handleInputFocusOut = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(parseValue(event.currentTarget.value));

  return (
    <div className="flex items-center gap-1">
      <input
        className="w-20 text-right px-4 bg-black text-white"
        type="number"
        min={minValue}
        max={maxValue}
        value={value}
        onBlur={handleInputFocusOut}
        onChange={handleInputChange}
      ></input>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleInputChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default BetSlider;
