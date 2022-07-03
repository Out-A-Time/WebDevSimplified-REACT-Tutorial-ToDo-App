import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todosListProp, toggleTodoProp1 }) {
  return todosListProp.map(function (todo) {
    return (
      <ToDo key={todo.id} todoProp={todo} toggleTodoProp2={toggleTodoProp1} />
    );
  });
}
export default ToDoList;
