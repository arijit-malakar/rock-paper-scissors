import { PropsWithChildren } from "react";

interface GameButtonProps {
  name: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function GameButton({
  children,
  name,
  onClick,
}: PropsWithChildren<GameButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={`btn-round btn-${name} border-gradient`}
    >
      {children}
    </button>
  );
}

export default GameButton;
