import React from 'react';
import './TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list-container">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <h3 title={todo.title}>{todo.title}</h3>
            <p className="description" title={todo.description}>{todo.description}</p>
            <div className="tooltip">
              <strong>{todo.title}</strong><br/><br/>{todo.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
