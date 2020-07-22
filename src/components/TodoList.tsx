import "./../styles.css";
import React from "react";
import { context } from "../state/state";
import { useIState, useMState } from "./../lib";

const TodoList = () => {

  // const { toggleTodo, removeTodo } = context.mutations

  const [todos, { toggleTodo, removeTodo }] = useMState(context)

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

//state management react #redux #react #javascript   #100DaysOfCode https://github.com/Jucian0/infinity-state

