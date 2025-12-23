// src/components/TodoItem.jsx
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
