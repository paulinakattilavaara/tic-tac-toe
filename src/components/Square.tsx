
type SquareProps = {
    id: number;
}


const Square = ({ id }: SquareProps) => {
  return (
    <div className="square" id={id.toString()}></div>
  )
}

export default Square;