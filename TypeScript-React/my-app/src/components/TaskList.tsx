import React from "react";
import Item from "../models/item";

interface TaskListProp {
  items: Item[];
}
function TaskList(props: TaskListProp): JSX.Element {
  return (
    <div>
      <h1>Today Lists</h1>
      <ul>
        {props.items.map((Element) => (
          <li key={Element.id}>{Element.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
