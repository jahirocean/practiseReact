import React from "react";
import { increment, decrement } from "./services/action/counterAction";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <center>
        <h3>Increment & Decrement Value</h3>
        <h1>
          <span className="mb-3 badge rounde badge-success">{count}</span>
        </h1>

        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-info ml-4"
        >
          Decrement
        </button>
      </center>
    </div>
  );
}

export default Counter;
