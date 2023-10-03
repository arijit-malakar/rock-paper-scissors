import { PropsWithChildren } from "react";

interface GameButtonProps {
  name: string;
  large?: boolean;
  win?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function GameButton({
  children,
  name,
  large,
  win,
  onClick,
}: PropsWithChildren<GameButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={`btn-round btn-${name} border-gradient ${
        large && "btn-large"
      } ${win && "win"}`}
    >
      {children}
    </button>
  );
}

export default GameButton;
