import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDeleteCounter,
      onIncrement,
      onDecrement,
      onAddCounter,
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <button
          onClick={() => this.props.onAddCounter()}
          className="btn btn-danger btn-sm"
        >
          Add
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDeleteCounter={onDeleteCounter}
            onAddCounter={onAddCounter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
