import React from "react";
import Todo from "./Todo";
export default function TodoList({ todos, setTodos, filtered }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filtered.map((todo) => (
            <Todo
              text={todo.text}
              setTodos={setTodos}
              key={todo.id}
              todos={todos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
