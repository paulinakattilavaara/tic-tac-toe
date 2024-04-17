import { GiTicTacToe } from "react-icons/gi";

const iconClick = () => {
  console.log("Klickade på ikonen.")
}

const Header = () => {
  return (
    <>
    <header className="header">Tic <span className="tac">Tac</span> Toe<GiTicTacToe className="ttt-icon" onClick={iconClick} /></header>
    </>
  )
}

export default Header