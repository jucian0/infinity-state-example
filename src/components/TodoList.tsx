import "./../styles.css";
import React from "react";
import { context } from "../state/state";
import { useIState } from "./../lib";

const TodoList = () => {

  const { toggleTodo, removeTodo } = context.mutations

  const todos = useIState(
    context,
    state => state.todos
  )

  return (
    <section>
      <ul>
        {todos.map(todo => (
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

