import './App.css'
import Card from './components/Card'

function App() {

// let myObj = {
//   username: "Ankit",
//   age : 17
// }

// let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4
       rounded-xl'>Tailwind test</h1>
      <Card username= "Ankit" btntext="click me" />
      <Card username="Harpreet" btntext="purchase now"/>
    </>
  )
}

export default App
