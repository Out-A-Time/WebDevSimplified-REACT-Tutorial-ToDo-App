import React from "react";

function ToDo({ todoProp, toggleTodoProp2 }) {
  function handleTodoClick() {
    toggleTodoProp2(todoProp.id);
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
export default ToDo;
