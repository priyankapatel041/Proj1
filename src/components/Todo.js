import React from "react";

export const Todo = (props) => {
  console.log(props.data);
  const deleteTodo = (event) => {
    event.target.parentNode.remove();
    // console.log(e.target);
    // props.setArray(...props.array,[props.array,props.array.remove(e.target.value)]);
  };
  return (
    <div className="container">
      <h1
        className="my-3"
        style={{
          textAlign: "center",
          border: "1px solid teal",
          width: "700px",
          margin: "auto",
        }}
      >
        {props.data}
      </h1>
      <button
        className="btn btn-sm border border-secondary"
        onClick={deleteTodo}
      >
        Delete
      </button>
    </div>
  );
};
