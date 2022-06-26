import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todosListProp, toggleTodo }) {
  return todosListProp.map(function (todo) {
    return <ToDo key={todo.id} todoProp={todo} toggleTodoProp={toggleTodo} />;
  });
}
