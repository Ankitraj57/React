import { useEffect, useState } from 'react'
import { TodoProvider } from "./context"
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-10 px-4">
        <div className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl px-6 py-6 
                        bg-white/10 backdrop-blur-lg border border-white/20 text-white">
          
          <h1 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
            ✨ Manage Your Todos
          </h1>

          {/* Todo Form  Goes Here*/}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Loop and Add TodoItem Here */}
          <div className="flex flex-col gap-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-300 italic">No todos yet, add one 🚀</p>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
