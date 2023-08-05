import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleCompleted, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
