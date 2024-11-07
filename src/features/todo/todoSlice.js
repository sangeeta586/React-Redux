// features/todo/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World"
    }
  ]
};

export const todoSlice = createSlice({
  name: 'todos',  // This should be a plural name, as you're dealing with multiple todos
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);  // Adding the todo to the list
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);  // Removing the todo
    }
  }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
