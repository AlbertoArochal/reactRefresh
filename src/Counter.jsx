import { useState } from "react";
import { useEffect } from "react";

let name = "Fernando";
let newMessage = {
  name: "Fernando",
  titlw: "Profesor",
};
export const Counter = () => {
  return (
    <>
      <h2 className="subtitle">{JSON.stringify(newMessage)}</h2>
    </>
  );
};
