import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todosListProp }) {
  return todosListProp.map(function (todo) {
    return <ToDo key={todo.id} todoProp={todo} />;
  });
}
