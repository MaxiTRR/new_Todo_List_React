import { useState } from "react";
import "./TaskForm.css";
import { useTaskContext } from "../../hooks/useTaskContext";

export function TaskForm() {
  const [value, setValue] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
  };

  return (
    <>
      <h1>Task App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          name="title"
          placeholder="Create a new Task"
          onChange={(e) => setValue(e.target.value)}
        />
        <input className="task-btn" type="submit" value="Send" />
      </form>
    </>
  );
}
