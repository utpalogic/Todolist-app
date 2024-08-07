import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    if (title.length < 8) {
      setError('Title must be at least 8 characters long');
      return;
    }

    addTodo({
      title,
      description,
    });
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Add Todo</h2>
      <div className="form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAddTodo}>Create</button>
      </div>
    </div>
  );
}

export default TodoForm;
