import "./TaskRow.css";
import { useState } from "react";
import { TaskEdit } from "../TaskEdit/TaskEdit";
import { useTaskContext } from "../../hooks/useTaskContext";

export function TaskRow({ el }) {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteTask } = useTaskContext();
  const { id, title } = el;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  return (
    <div className="task-row">
      <div className="task-row_wrapper">
        <div className="task-id">
          <input type="radio" />
          <p>{title}</p>
        </div>

        <div className="btn-wrapper">
          <button className="btn btn-edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-del" onClick={() => handleDelete()}>
            Delete
          </button>
        </div>
      </div>
      {isEditing && <TaskEdit el={el} setIsEditing={setIsEditing} />}
    </div>
  );
}
