import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai </h1>
    </div>
  )
}

// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children:'click me to visit google'
// }

// React ke hisab se
const anotherUser = 'new chai aur code'

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser
)

const anotherElement = ( 
  <a href="https://google.com" target="_blank">Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <StrictMode>
    reactElement
  // </StrictMode>,
)