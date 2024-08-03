import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="todos-container">
      {todos.map((todo, index) => (
        <div className="todo" key={index}>
          <h3>{todo.title}</h3>
          {todo.description && <p>{todo.description}</p>}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
