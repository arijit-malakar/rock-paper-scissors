import { PropsWithChildren } from "react";

interface GameButtonProps {
  name: string;
  large?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function GameButton({
  children,
  name,
  large,
  onClick,
}: PropsWithChildren<GameButtonProps>) {
  return (
    <button
      onClick={onClick}
      className={`btn-round btn-${name} border-gradient ${
        large && "btn-large"
      }`}
    >
      {children}
    </button>
  );
}

export default GameButton;
