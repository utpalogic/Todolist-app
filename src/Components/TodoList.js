import React from 'react';
import './TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <h3 title={todo.title}>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
