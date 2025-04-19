import { useState } from "react";

const dataProfessor = {
  name: "Fernando",
  title: "Profesor",
};

const getName = (name, title) => {
  return `el nombre es ${name} y el cargo es ${title}`;
};

export const Counter = () => {
  const [message, setMessage] = useState("");

  const newMessage = () => getName(dataProfessor.name, dataProfessor.title);

  return (
    <>
      <button className="button" onClick={() => setMessage(newMessage())}>
        Presiona
      </button>
      <h2 className="subtitle">{message}</h2>
    </>
  );
};
