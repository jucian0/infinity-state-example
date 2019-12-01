

import "./../styles.css";
import React from "react";
import { state as stateContext, TodoType } from "../state/state";
import { useMutation } from "infinity-state";

const TodoList = () => {

  const state= useMutation(
    stateContext,
    state => state.todos
  )


  return (
    <section>
      <ul>
        {Array.isArray(state) && state.map((todo: any) => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => stateContext.mutations.toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => stateContext.mutations.removeTodo(todo.id)} >Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;


