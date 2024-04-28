import React, { useRef } from "react";
import TaskList from "./TaskList";
interface TaskFormProp {
  onAddItem: (name: string) => void;
}
function TaskForm({ onAddItem }: TaskFormProp): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  function saveData(e: React.FormEvent) {
    e.preventDefault();
    const listTask = inputRef.current!.value;
    onAddItem(listTask);
    inputRef.current!.value = ""; //clear form
  }
  return (
    <form onSubmit={saveData}>
      <input type="text" placeholder="Create your Tasks!" ref={inputRef} />
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
