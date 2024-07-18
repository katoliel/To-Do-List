import { useState } from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import { Task } from "./types";
import Heading from "./Heading";
import TasksList from "./TasksList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleAdd = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <Heading heading="TO DO LIST" />
      <AddTask handleAdd={handleAdd} />
      <TasksList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </TasksList>
    </>
  );
};

export default App;
