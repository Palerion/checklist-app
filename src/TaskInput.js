import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New task..."
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
