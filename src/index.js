import React from "react";
import ReactDom from "react-dom";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";


const App = () => {

  const todoData = [
    {text: 'Drink Coffee', important: false},
    {text: 'Make Awesome App', important: true},
    {text: 'Have a lunch', important: false}
  ];

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  );
};


ReactDom.render(<App/>,
  document.getElementById('root'));


