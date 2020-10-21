import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getFromLocalStorage();
  }, []);
  
  useEffect(() => {
    saveToLocalStorage();
    filterHandler();
  }, [todos, status]);

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todosFromLocal);
    }
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFiltered(todos.filter((el) => el.completed === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;

