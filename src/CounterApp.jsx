import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ number }) => {
  const [count, setCount] = useState(number);

  const substract = () => setCount((prev) => prev - 1);
  const add = () => setCount((prev) => prev + 1);

  return (
    <>
      {" "}
      <h1 className="app">CounterApp</h1>
      <h2>{count}</h2>
      <button className="substract" onClick={substract}>
        -1
      </button>
      <button className="add" onClick={add}>
        +1
      </button>
    </>
  );
};

CounterApp.PropTypesropTypes = {
  number: PropTypes.number.isRequired,
};
