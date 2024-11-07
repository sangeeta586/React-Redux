// components/Todos.js
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);  // Accessing todos properly
  const dispatch = useDispatch();

  return (
    <div className="max-w-lg mx-auto mt-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Todos</h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
            <span className="text-lg font-medium text-gray-700">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
