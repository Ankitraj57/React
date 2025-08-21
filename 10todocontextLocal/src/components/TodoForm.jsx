import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo.trim()) return
        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex items-center gap-2">
            <input
                type="text"
                placeholder="✍️ Write your todo..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 
                           text-white placeholder-gray-300 focus:outline-none 
                           focus:ring-2 focus:ring-pink-400 transition"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 
                           hover:from-pink-600 hover:to-purple-700 text-white font-semibold 
                           shadow-md hover:shadow-lg transition-all duration-300"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm;
