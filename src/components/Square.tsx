
type SquareProps = {
  id: number;
  onClick: (id: number) => void;
  player: string;
}

const Square = ({ id, onClick, player }: SquareProps) => {
  const handleClick = () => {
      onClick(id);
  };

  return (
      <div className="square" onClick={handleClick}>
          {player}
      </div>
  );
}

export default Square;