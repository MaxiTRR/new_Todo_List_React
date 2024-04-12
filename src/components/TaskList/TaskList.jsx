import { TaskRow } from "../TaskRow/TaskRow";
import "./TaskList.css";
import { useTaskContext } from "../../hooks/useTaskContext";

export function TaskList() {
  const { task } = useTaskContext();
  return (
    <section className="task-list_wrapper">
      <h2>Tasks List</h2>
      {task.map((el) => (
        <TaskRow key={el.id} el={el} />
      ))}
    </section>
  );
}
