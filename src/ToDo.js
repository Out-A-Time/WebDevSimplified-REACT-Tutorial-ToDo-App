import React from "react";

export default function ToDo({ todoProp, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todoProp.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todoProp.complete}
          onChange={handleTodoClick}
        />
      </label>
      {todoProp.name}
    </div>
  );
}
