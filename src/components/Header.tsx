import { GiTicTacToe } from "react-icons/gi";

const iconClick = () => {
  alert("\n✖️TIC TAC TOE✖️\n\nClick on the squares on the game board to place your mark. ❌⭕\n\nThe first player to get three in a row either horizontally, vertically, or diagonally wins! 🏆\n\nIf all squares are filled without three in a row, the game ends in a draw. ⚖️\n\nTo play again click on the 'Restart' button!🔁")
}

const Header = () => {
  return (
    <>
    <header className="header">Tic <span className="tac">Tac</span> Toe<GiTicTacToe className="ttt-icon" onClick={iconClick} /></header>
    </>
  )
}

export default Header;