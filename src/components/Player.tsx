import { FC } from "react";
import defaultAvatar from "../assets/player-avatars/avatar.svg";

type PlayerProps = {
  name: string;
  balance: number;
};

const formatBalance = (balance: number) => {
  return balance.toFixed(2).toString();
};

const Player: FC<PlayerProps> = ({ name, balance }) => {
  return (
    <>
      <div className="flex relative items-center justify-center h-20 w-20 rounded-full bg-gray-400">
        <img
          className="object-cover w-full h-full"
          src={defaultAvatar}
          alt="Avatar"
        />
        <div className="absolute bottom-0 left-20">
          <p className="bg-gray-800 p-1 text-white text-sm border-2 rounded whitespace-nowrap z-10 mb-1">
            {name} (${formatBalance(balance)})
          </p>
        </div>
      </div>
    </>
  );
};

export default Player;
