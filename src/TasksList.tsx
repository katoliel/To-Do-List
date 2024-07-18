import React, { ReactNode } from "react";


interface TasksListProps {
  children: ReactNode;
}

const TasksList = ({ children }: TasksListProps) => {
  return <ul className="task-list">{children}</ul>;
};

export default TasksList;
