import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  //Use State returns an Array. Default state for ToDoList is empty array.
  //Object destructuring.
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  // useEffect(function () {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(storedTodos);
  // }, []);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(
    function () {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    },
    [todos]
  );

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  function toggleTodo(id) {
    //create copy of todos array. Never modify original.
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(name);
    setTodos(function (previousTodos) {
      console.log(todos);
      return [...previousTodos, { id: uuidv4(), name: name, complete: false }];
    });
    //cleans the input field
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <ToDoList todosListProp={todos} toggleTodoProp={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Task</button>
      <button onClick={handleClearTodos}>Clear Completed Tasks</button>
      <div>
        {todos.filter((todo) => !todo.complete).length} tasks left to do
      </div>
    </>
  );
}

export default App;
