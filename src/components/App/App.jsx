import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { TaskContextProvider } from "../../Context/TaskContext";
import "./App.css";

export function App() {
  return (
    <section className="container">
      <TaskContextProvider>
        <div className="task-wrapper">
          <TaskForm />
          <TaskList />
        </div>
      </TaskContextProvider>
    </section>
  );
}
