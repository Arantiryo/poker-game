import { FC, useState } from "react";
import { PlayingCard } from "../types";
import cardImage from "../assets/svg-cards/9_of_spades.svg";

type PlayingCardProps = {
  card: PlayingCard;
};

const Card: FC<PlayingCardProps> = (props) => {
  // const [imageSrc, setImageSrc] = useState<string | null>(null);

  // import(props.card.path)
  //   .then((image) => setImageSrc(image.default))
  //   .catch((error) => console.error(error));

  return <img className="h-1/3" src={cardImage} alt="Card" />;

  // return (
  //   <div className="h-full ">
  //     {/* {imageSrc && ( */}
  //     <img className="h-1/2 max-w-[300px]" src={cardImage} alt="Card" />
  //     {/* )} */}
  //   </div>
  // );
};

export default Card;
