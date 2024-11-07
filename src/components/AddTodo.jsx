// components/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));  // Dispatching the action with input
      setInput('');  // Clear the input field
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white my-24 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add Todo</h2>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}  // Properly update input state
          placeholder="Enter a new todo"
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition duration-200 ease-in-out hover:border-blue-400"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
