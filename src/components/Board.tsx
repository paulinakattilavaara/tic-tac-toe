import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [playerMoves, setPlayerMoves] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleStart = () => {
    setPlayerMoves(Array(9).fill(""));
    setCurrentPlayer("X");
  };

  const handleClick = (id: number) => {
    console.log(`Klick på ruta med id: ${id}`);
    if (!playerMoves[id - 1]) {
      setPlayerMoves(prevMoves => {
        const newMoves = [...prevMoves];
        newMoves[id - 1] = currentPlayer;
        return newMoves;
      });
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return (
    <div className="board">
      <div className="row1">
        <Square id={1} onClick={handleClick} player={playerMoves[0]} />
        <Square id={2} onClick={handleClick} player={playerMoves[1]} />
        <Square id={3} onClick={handleClick} player={playerMoves[2]} />
      </div>
      <div className="row2">
        <Square id={4} onClick={handleClick} player={playerMoves[3]} />
        <Square id={5} onClick={handleClick} player={playerMoves[4]} />
        <Square id={6} onClick={handleClick} player={playerMoves[5]} />
      </div>
      <div className="row3">
        <Square id={7} onClick={handleClick} player={playerMoves[6]} />
        <Square id={8} onClick={handleClick} player={playerMoves[7]} />
        <Square id={9} onClick={handleClick} player={playerMoves[8]} />
      </div>
      <button className="restart" onClick={handleStart}>Restart game</button>
    </div>
  )
}

export default Board;