import { useState } from 'react';
import './App.css'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from "react-confetti"
const countOfTries=10;
let triesLeft =countOfTries;
let failed = false;
function App() {
  //generate a random number between 1 and 6
  const randomNumber = () => {
    return Math.ceil(Math.random() * 6)
  }
  console.log(randomNumber);

  const generateAllNewDice = () => {
    const newDice = new Array(10).fill().map(ele =>
    (
      {
        value: randomNumber(),
        isHeld: false,
        key: nanoid()
      }
    ));
    return newDice;
  }

  const [diceState, setDiceState] = useState(() => generateAllNewDice())
  let gameOver = diceState.every(state => state.isHeld && diceState[0].value === state.value) || triesLeft == 0

  const handleDiceClick = (key) => {
    triesLeft = triesLeft - 1;
    console.log("tried left " + triesLeft)
    if (gameOver) {
      triesLeft = countOfTries;
      setDiceState(generateAllNewDice())
      return;
    }

    console.log("Handle click oin dice called.....")
    const newDices = diceState.map(ele => {
      if (ele.isHeld) {
        console.log("same dices")
        return {
          ...ele
        }
      } else {
        return {
          ...ele,
          value: Math.ceil(Math.random() * 6)
        };
      }
    })
    setDiceState(newDices);
  }


  //on click on a dice make it as isHeld=true
  function hold(key) {
    console.log("hold is calling.......")
    setDiceState(diceState.map(state => {
      return state.key === key ?
        {
          ...state,
          isHeld: !state.isHeld
        } : state;
    }
    ))
  }

  const dieElements = diceState.map(ele => <Die key={ele.key} hold={() => hold(ele.key)}
    value={ele.value} isHeld={ele.isHeld} />);
  console.log("Game Over is " + gameOver)
  console.log("failed " + failed)
  return (
    <>
      {gameOver && !failed && triesLeft > 0 && <Confetti />}
      <div className='container'>
        <div className={gameOver && triesLeft == 0 ? 'subContainer subContainer_failed' : 'subContainer subContainer_won'}>
          <h1>{gameOver && triesLeft == 0 ? 'Try Again!!' : 'Tenzies'}</h1>
          <p>Roll until all dice are the same.Click each die to freeze it at its current value between rolls.</p>
          <div className='diceContainer'>
            {dieElements}
          </div>
          <button onClick={handleDiceClick} className='rollButton'>{gameOver ? "New Game" : "Roll on"}</button>
          <p>Number of tries left: {triesLeft}</p>
        </div>
      </div>

    </>
  )
}

export default App
