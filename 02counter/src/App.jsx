import { useState } from 'react';
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () =>{
    // counter = counter + 1;
    // setCounter(prevcounter => Math.min(prevcounter +1,20));
    // setCounter(Math.min(counter + 1, 20));
    setCounter(prevCounter => Math.min(prevCounter + 1, 40))
    setCounter(prevCounter => Math.min(prevCounter + 1, 40))
    setCounter(prevCounter => Math.min(prevCounter + 1, 40))
    setCounter(prevCounter => Math.min(prevCounter + 1, 40))
  }

  const removeValue = () =>{
    // setCounter(prevcounter => Math.max(prevcounter - 1, 0));
    // setCounter(Math.max(counter - 1, 0));
    setCounter(prevCounter => Math.max(prevCounter - 1, 0))
    setCounter(prevCounter => Math.max(prevCounter - 1, 0))
    setCounter(prevCounter => Math.max(prevCounter - 1, 0))
    setCounter(prevCounter => Math.max(prevCounter - 1, 0))
  }
  return (
    <>
   <h1>chai aur react</h1>
   <h2>counter value : {counter}</h2>

   <button
   onClick={addValue}
   >Add value : {counter}
   </button>

   <br />

   <button
   onClick={removeValue}
   >Remove value : {counter}
   </button>


   <p>footer : {counter}</p>
    </>
  )
}

export default App
