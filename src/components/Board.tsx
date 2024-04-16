import Square from "./Square";

const Board = () => {
  return (
    <div className="board">
        <div className="row1"><Square id={1} /><Square id={2} /><Square id={3} /></div>
        <div className="row2"><Square id={4} /><Square id={5} /><Square id={6} /></div>
        <div className="row3"><Square id={7} /><Square id={8} /><Square id={9} /></div>
    </div>
  )
}

export default Board;