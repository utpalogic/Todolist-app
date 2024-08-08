import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <button className="delete-button" onClick={() => onDelete(index)}>X</button>
          <h3 title={todo.title}>{todo.title}</h3>
          <p className="description" title={todo.description}>{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
