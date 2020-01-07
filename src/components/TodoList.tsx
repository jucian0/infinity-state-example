import "./../styles.css";
import React from "react";
import { context } from "../state/state";
import { useMutation } from "infinity-state";

const TodoList = () => {

  const state= useMutation(
    context,
    state => state.todos
  )

  return (
    <section>
      <ul>
        {Array.isArray(state) && state.map((todo: any) => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => context.mutations.toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => context.mutations.removeTodo(todo.id)} >Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;


