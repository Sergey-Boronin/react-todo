import React from "react";

import TodoListItem from "./TodoListItem";
const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem  text="Drink"/></li>
      <li>
        <TodoListItem
          text="Eat"
          important
        />
      </li>
    </ul>
  );
};

export default TodoList;