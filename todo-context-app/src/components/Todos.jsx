// src/components/Todos.jsx
import React from "react";
import { TodoProvider } from "../context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <TodoProvider>
      <div>
        <h2>Todo Application using Context API</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default Todos;
