import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editId, text: editText }))
      setEditId(null)
      setEditText('')
    }
  }

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Left side */}
            {editId === todo.id ? (
              <input
                type="text"
                className="bg-gray-700 text-white px-2 py-1 rounded"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            {/* Right side */}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <>
                  <button
                    onClick={handleUpdate}
                    className="text-white bg-green-500 border-0 py-1 px-4 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditId(null)
                      setEditText('')
                    }}
                    className="text-white bg-red-500 border-0 py-1 px-4 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
