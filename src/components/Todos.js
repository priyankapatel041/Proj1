import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  return (
    props.data &&
    props.data.map((element) => {
      return <Todo data={element} />;
    })
  );
};
