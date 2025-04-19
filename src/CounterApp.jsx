import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ number }) => {
  const [count, setCount] = useState(number);

  const handleSubstract = () => setCount((prevCount) => prevCount - 1);
  const handleAdd = () => setCount((prevCount) => prevCount + 1);
  const handleReset = () => setCount(number);

  return (
    <>
      {" "}
      <h1 className="app">CounterApp</h1>
      <h2>{count}</h2>
      <button className="substract" onClick={handleSubstract}>
        -1
      </button>
      <button className="add" onClick={handleAdd}>
        +1
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.PropTypesropTypes = {
  number: PropTypes.number.isRequired,
};
