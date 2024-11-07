// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

// Wrapping the reducer in an object
export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
