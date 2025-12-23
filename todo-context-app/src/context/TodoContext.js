// src/context/TodoContext.js
import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title };
    setTodos([...todos, newTodo]);
  };

  // Delete a todo by id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
