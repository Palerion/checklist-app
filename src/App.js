import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import "./App.css";

let idCounter = 1;

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    const newTask = { id: idCounter, name: name, completed: false };
    idCounter++;
    setTasks([...tasks, newTask]);
  };

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Equipment/Task CheckList</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleCompleted={toggleCompleted}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
