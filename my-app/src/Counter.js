import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./services/action/counterAction";

function Counter({ increment, decrement, count }) {
  return (
    <div className="container">
      <center>
        <h3>Increment & Decrement Value</h3>
        <h1>
          <span className="mb-3 badge rounde badge-success">{count}</span>
        </h1>

        <button onClick={() => increment()} className="btn btn-primary">
          Increment
        </button>
        <button onClick={() => decrement()} className="btn btn-info ml-4">
          Decrement
        </button>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counterReducer.count,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
