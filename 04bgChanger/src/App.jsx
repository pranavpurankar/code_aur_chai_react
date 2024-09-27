import {useState} from "react"


function App() {
  const [color, setColor] = useState("black")
  
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center 
      top-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
            onClick={ () => setColor("red")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor:"red"}}
            >Red</button>

            <button
            onClick={ () => setColor("green")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor:"green"}}
            >Green</button>
            
            <button
            onClick={ () => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor:"blue"}}
            >Blue</button>

            <button
            onClick={ () => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor:"olive"}}
            >Olive</button>
            
            <button
            onClick={ () => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor:"gray"}}
            >Gray</button>
            
            <button
            onClick={ () => setColor("darkorange")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor:"darkorange"}}
            >Orange</button>


          </div>
      </div>
    </div>
  )
}

export default App