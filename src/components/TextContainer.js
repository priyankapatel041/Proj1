import React, { useState } from "react";
import { Todos } from "./Todos";

export const TextContainer = () => {
  const [array, setArray] = useState([]);

  const addToTodos = () => {
    let data = document.getElementById("text").value;
    if (data) {
      setArray((array) => [...array, data]);
    }
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          width: "800px",
        }}
      >
        <input
          id="text"
          className="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
        />
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary my-3 "
          id="submit-btn"
          onClick={addToTodos}
        >
          Add Todo
        </button>
      </div>
      <Todos data={array} />
    </>
  );
};
