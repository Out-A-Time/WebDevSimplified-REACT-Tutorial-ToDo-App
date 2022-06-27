import React from "react";

export default function ToDo({ todoProp, toggleTodoProp }) {
  function handleTodoClick() {
    toggleTodoProp(todoProp.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todoProp.complete}
          onChange={handleTodoClick}
        />
        {todoProp.name}
      </label>
    </div>
  );
}
