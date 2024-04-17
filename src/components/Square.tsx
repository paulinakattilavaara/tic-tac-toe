
type SquareProps = {
    id: number;
}

const handleClick = (id: number) => {
  console.log(`Klick på ruta med id: ${id}`);
};


const Square = ({ id }: SquareProps) => {
  return (
    <div className="square" id={id.toString()} onClick={() => handleClick(id)}></div>
  )
}

export default Square;