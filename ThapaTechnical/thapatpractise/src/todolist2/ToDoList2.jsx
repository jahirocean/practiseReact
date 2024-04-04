import React from "react";
import "./ToDo2.css";

const ToDoList2 = (props) => {
  return (
    <>
      <div className="list">
        <li>{props.text}</li>
        <button className="todo_delete">
        <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default ToDoList2;
