import { useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";

export function useTaskContext(){
    const {task, setTask} = useContext(TaskContext);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(task));
    }, [task]);

    const addTask = (value) =>{
        setTask([
            ...task,
            {
              id: Date.now(),
              title: value,
              done: false,
            },
        ]);
    };

    const deleteTask = (id)=>{
        const newData = task.filter((item) => item.id !== id);
        console.log(id);
        setTask(newData);
    }

    const editTask = (id, el) =>{
        const editData = task.map((data) => (data.id === id ? el : data));
        setTask(editData);
    }
    return {task, setTask, addTask, deleteTask, editTask}
}