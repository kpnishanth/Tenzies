import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
      <div className='subContainer'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same.Click each die to freeze it at its current value between rolls.</p>
        <div className='diceContainer'>
          <div className='die'>1</div>
          <div className='die'>2</div>
          <div className='die'>3</div>
          <div className='die'>4</div>
          <div className='die'>5</div>
          <div className='die'>6</div>
          <div className='die'>7</div>
          <div className='die'>8</div>
          <div className='die'>9</div>
          <div className='die'>10</div>
        </div>
        <button className='rollButton'>Roll</button>
      </div>
      </div>
       
    </>
  )
}

export default App
