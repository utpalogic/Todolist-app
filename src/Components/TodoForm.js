import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleCreate = () => {
    if (title.length < 8) {
      setError('Title must be at least 8 characters long.');
      return;
    }
    setError('');
    addTodo({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <h2>Create Todo</h2>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="Title (min 8 characters)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default TodoForm;
