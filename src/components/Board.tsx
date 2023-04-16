import { FC } from "react";
import Card from "./Card";
import deck from "../utils/deck";
import FaceDownCard from "./FaceDownCard";

const Board: FC = () => {
  const ac = deck.get("Ac");
  const ad = deck.get("Ad");
  const ah = deck.get("Ah");

  if (!ac || !ad || !ah) return <div>Error</div>;

  return (
    <div className="h-1/3 flex items-center justify-center gap-5 overflow-hidden relative">
      <p className="absolute top-10 left-50 text-white">Pot: $0.00</p>
      <Card card={ac} />
      <Card card={ad} />
      <Card card={ah} />
      <FaceDownCard />
      <FaceDownCard isHidden={true} />
    </div>
  );
};

export default Board;
