import { useRef } from "react";

interface Task {
  id: number;
  text?: string;
}

interface AddTaskProps {
  handleAdd: (task: Task) => void;
}

const AddTask = ({ handleAdd }: AddTaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitCount = useRef(0);

  const addTask = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputRef.current === null) return;

    console.log(inputRef.current);
    const input = inputRef.current.value;

    const newTask: Task = {
      id: Date.now(),
      text: input?.trim(),
    };

    console.log(input);
    handleAdd(newTask);

    inputRef.current.value = "";

    submitCount.current += 1;
    console.log(`Form submitted ${submitCount.current} times`);
  };

  return (
    <form onSubmit={addTask}>
      <input
        className="container"
        type="text"
        ref={inputRef}
        placeholder="Add new task"
      />
      <button className="button-add" type="submit">
        Add task
      </button>
    </form>
  );
};

export default AddTask;
