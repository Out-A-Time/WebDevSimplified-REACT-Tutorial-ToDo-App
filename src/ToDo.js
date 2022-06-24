import React from "react";

export default function ToDo({ todoProp }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todoProp.complete} />
      </label>

      {todoProp.name}
    </div>
  );
}
