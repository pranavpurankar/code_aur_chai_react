import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username:"pranav",
    age:28
  }



  return (
    <>
      <h1 className='bg-green-400 text-black p-5 
      rounded-xl'>Tailwind Test</h1>
      <Card username="Pranav Youngest trillionaire" />
      <Card />
    </>
  )
}

export default App
