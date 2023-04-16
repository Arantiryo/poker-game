import { FC } from "react";

type ActionButtonProps = {
  action: string;
};

const ActionButton: FC<ActionButtonProps> = ({ action }) => {
  return (
    <button className="bg-gray-500 hover:bg-gray-700 text-white min-w-[100px] font-bold py-2 px-4 rounded-xl capitalize">
      {action}
    </button>
  );
};

export default ActionButton;
