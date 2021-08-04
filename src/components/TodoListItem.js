import React from "react";

const TodoListItem = ( { text, important = false } ) => {

  const listStyle = {
    color: important ? "tomato" : "black"
  };

  return <span style={listStyle}>{ text }</span>;
};

export default TodoListItem;