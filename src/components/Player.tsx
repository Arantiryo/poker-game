import { FC } from "react";
import defaultAvatar from "../assets/player-avatars/avatar.svg";

const Player: FC = () => {
  return (
    <>
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-400 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={defaultAvatar}
          alt="Avatar"
        />
      </div>
    </>
  );
};

export default Player;
