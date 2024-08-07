import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="app-container">
      <div className="square-container">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
