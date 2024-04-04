import React, { useState } from "react";
import "./ToDo2.css";
import ToDoList2 from "./ToDoList2";

function ToDo2() {
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);

  const HandleInput = (event) => {
    setInput(event.target.value);
  };

  const handleInputList = () => {
    setInputList((oldItems) => {
      return [...oldItems, input];
    });
    setInput("");
  };

  return (
    <>
      <div className="container">
        <div className="todo_container">
          <form className="todo_form">
            <input
              onChange={HandleInput}
              type="text"
              value={input}
              placeholder="Enter Your Task"
            />
            <button type="submit" onClick={handleInputList}>
              Add
            </button>
          </form>
          <ol>
            {inputList.map((inputVal) => {
              return <ToDoList2 text={inputVal} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDo2;
