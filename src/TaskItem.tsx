import React from "react";

import { Task } from "./types";
import "./App.css";

interface TaskItemProps {
  task: Task;
  handleRemoveTask: (id: number) => void;
}

const TaskItem = ({ task, handleRemoveTask }: TaskItemProps) => {
  return (
    <li className="task-item" key={task.id}>
      {task.text}
      <button className="button-x" onClick={() => handleRemoveTask(task.id)}>x</button>
    </li>
  );
};

export default TaskItem;
