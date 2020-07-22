import "./../styles.css";
import React from "react";
import { context } from "../state/state";
import { useMState, useSubscribe } from "./../lib";

const TodoList = () => {

  const [todos, { toggleTodo, removeTodo }] = useMState(context)

  useSubscribe(context, "toggleTodo", () => {
    //execute side effect when async actions happen
  })

  return (
    <section>
      <ul>
        {todos.todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button
                onClick={() => toggleTodo(todo.id)}>
                Toggle
                </button>
              <button
                onClick={() => removeTodo(todo.id)} >
                Remove
                </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;

