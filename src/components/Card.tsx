import { FC } from "react";
import { PlayingCard } from "../types";

type PlayingCardProps = {
  card: PlayingCard;
};

const Card: FC<PlayingCardProps> = ({ card }) => {
  return <img className="h-1/3" src={card.image} alt="Card" />;
};

export default Card;
