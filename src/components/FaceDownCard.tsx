import { FC } from "react";
import faceDownImage from "../assets/svg-cards/face_down.svg";

type FaceDownCardProps = {
  isHidden?: boolean;
};

const FaceDownCard: FC<FaceDownCardProps> = ({ isHidden }) => {
  return (
    <img
      className={`h-1/3 ${isHidden ? "opacity-0" : ""}`}
      src={faceDownImage}
      alt="Card"
    />
  );
};

export default FaceDownCard;
