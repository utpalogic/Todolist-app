import React, { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <div className="square-container">
        <TodoForm addTodo={addTodo} />
        <div className="todo-list-wrapper">
          <TodoList todos={todos} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
