import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Edit2, Check, Trash2 } from 'lucide-react'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl shadow-md transition-all duration-300
        ${todo.completed 
          ? "bg-green-500/20 border border-green-400 text-green-100" 
          : "bg-white/10 border border-white/20 text-white hover:bg-white/20"}
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="w-5 h-5 accent-pink-500 cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Editable Input */}
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none rounded-lg px-2 py-1 text-lg 
          ${isTodoEditable ? "border border-pink-400 bg-white/20" : "border-transparent"}
          ${todo.completed ? "line-through opacity-70" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        className={`px-3 py-1 rounded-lg text-sm font-medium transition 
          ${isTodoEditable 
            ? "bg-green-500 hover:bg-green-600" 
            : "bg-blue-500 hover:bg-blue-600"} 
          text-white disabled:opacity-50`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
      {isTodoEditable ? "📁" : "✏️"}  
      </button>

      {/* Delete Button */}
      <button
        className="px-3 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
        onClick={() => deleteTodo(todo.id)}
      >
       <Trash2 size={16} />
      </button>
    </div>
  );
}

export default TodoItem;
