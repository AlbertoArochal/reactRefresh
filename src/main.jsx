import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./HelloWorld.jsx";
import { CounterApp } from "./CounterApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp number={9} />
  </React.StrictMode>
);
