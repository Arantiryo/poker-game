import { FC } from "react";

type BetSliderProps = {
  minValue: number;
  maxValue: number;
  value: number;
};

const BetSlider: FC<BetSliderProps> = ({ minValue, maxValue, value }) => {
  return (
    <input
      type="range"
      min={minValue}
      max={maxValue}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
  );
};

export default BetSlider;
