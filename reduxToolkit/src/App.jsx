
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='bg-gray-950 text-white p-2 hover:bg-red-500'>Learn About ReduxToolkit/React-Redux</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
