import React, { useState, useRef } from "react";

import ToDoList from "./ToDoList";

function App() {
  //Use State returns an Array. Default state for ToDoList is empty array.
  //Object destructuring.
  const [todos, setTodos] = useState([
    { id: 1, name: "Wash Car", complete: false },
  ]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setTodos(function (previousTodos) {
      return [...previousTodos, { id: 1, name: name, complete: false }];
    });
    //cleans the input field
    todoNameRef.current.value = null;
  }

  return (
    <>
      <ToDoList todosListProp={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Task</button>
      <button>Clear Completed Tasks</button>
      <div>0 tasks left to do</div>
    </>
  );
}

export default App;
