import PropTypes from "prop-types";
import { useState } from "react";// es un hook

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = (event) => {
    setCounter(counter + 1);
  };
  const handleRemove = (event) => {
    if (counter > 1 ) setCounter(counter - 1);
  };
  const handleReset = (event) => {
    setCounter(1);
  }
  return (
    <>
      <h1 className="counter">Counter App</h1>
      <h2 className="counter">{counter}</h2>
      <div className="flex-button">

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRemove}>-1</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

CounterApp.propsTypes = {
  value: PropTypes.number.isRequired,
};
