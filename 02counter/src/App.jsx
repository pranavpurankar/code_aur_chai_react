import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    counter = counter + 1;
    if(counter<=20){
      setCounter(counter)
    }else{
      alert("You can't go beyond 20.")
    }
  }

  const removeValue = () =>{
    counter = counter-1;
    if(counter>=0){
      setCounter(counter);
    }else{
      alert("You can't decrease it below 0.")
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      
      <br />
      
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
