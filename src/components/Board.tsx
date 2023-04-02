import { FC } from "react";
import { PlayingCard } from "../types";
import Card from "./Card";

const Board: FC = () => {
  const testCard: PlayingCard = {
    value: "9",
    suit: "s",
    path: "./src/",
  };

  return (
    <div className="h-1/3 flex items-center justify-center gap-5 overflow-hidden">
      <Card card={testCard} />
      <Card card={testCard} />
      <Card card={testCard} />
      <Card card={testCard} />
      <Card card={testCard} />
    </div>
  );
};

export default Board;
