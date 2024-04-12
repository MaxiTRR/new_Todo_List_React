import { useState } from "react";
import "./TaskEdit.css";

import { useTaskContext } from "../../hooks/useTaskContext";

export function TaskEdit({ el, setIsEditing }) {
  const { id, title } = el;
  const [editValue, setEditValue] = useState(title);
  const { editTask } = useTaskContext();

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    el.title = editValue;
    editTask(id, el);
    setIsEditing(false);
  };

  return (
    <div>
      <form className="edit-form" onSubmit={handleEditSubmit}>
        <input
          className="edit-input"
          type="text"
          value={editValue}
          onChange={handleChange}
        />
        <input className="edit-btn" type="submit" value="Change" />
      </form>
    </div>
  );
}
