import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css'; // Global styles

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="app-container">
      <div className="square-container">
        <TodoForm addTodo={addTodo} />
        <div className="todo-list-wrapper">
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
