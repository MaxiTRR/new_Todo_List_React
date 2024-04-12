import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}
