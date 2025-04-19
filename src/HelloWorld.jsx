import { Counter } from "./Counter";
import PropTypes from "prop-types";

export const App = ({ title, subtitle }) => {
  return (
    <div className="App">
      <h1>Hola mundo!!!</h1>
      <h2 className="props">{title}</h2>
      <h2 className="props">{subtitle}</h2>
      <Counter />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
