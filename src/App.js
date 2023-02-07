import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"


const App = () => {
  const [board, setBoard] = useState([
   
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
   

const handleGameplay= (index) =>{

    let updatedBoard = [...board]
    if(index === treasureLocation){
      updatedBoard[index] = "🏆"
      setBoard(updatedBoard)
      return alert("YOU WIN")
      
    } else if(index === bombLocation){
      updatedBoard[index] = "🚀"
      setBoard(updatedBoard)
    } else{
      updatedBoard[index] = "🏴‍☠️"
      setBoard(updatedBoard)
    }

   
}

const pageRefresh = () => {
  setBoard([
   
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
}

  return (
    <>
      <h1>Universe Skirmish</h1>
      <div className="gameboard">
      {board.map((value, index) => {
       return (
       <Square 
        value= {value}
        key={index} 
        index={index}
        handleGameplay={handleGameplay}
       />
       )
      })}
        </div>
          <div className="resetbutton">
          <button onClick={pageRefresh}>Play Again...if you dare!</button>
        </div>
    </>
  )
}

export default App
