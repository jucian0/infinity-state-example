import React, { Fragment } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => (
  <Fragment>
    <TodoForm />
    <TodoList />
  </Fragment>
);

export default App;
