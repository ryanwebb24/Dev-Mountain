import { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import ResetBtn from "./components/ResetBtn"

function App() {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState(true)

  function calculateWinner(board) {
    let winningLines = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i in winningLines) {
      let [a, b, c] = winningLines[i];
      if (board[a] === "O" && board[b] === "O" && board[c] === "O" ) {
        return "O won!"
      } else if (board[a] === "X" && board[b] === "X" && board[c] === "X" ) {
        return "X won!"
      }
    }
    return "Who will win?"
  }
  return (
    <div className="App">
      <div className="container">
      {square.map((value, index) => {
          return (
            <Square
              square={square}
              setSquare={setSquare}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            />
          );
        })}
        <ResetBtn square={setSquare} />
      </div>
      <span>{calculateWinner(square)}</span>
    </div>
  )
}

export default App
