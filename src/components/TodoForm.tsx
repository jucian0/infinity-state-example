import "./../styles.css";
import React, { useState } from "react";
import { context } from "../state/state";


const TodoForm = () => {

    const [inputText, setInputText] = useState('')

    const add = () => {
        context.mutations.addTodo({
            text: inputText,
            complete: false, id: Math.random().toString()
        })
        setInputText('')
    }

    const getTodos = async () => {
        try {
            const data = await context.mutations.fetch()
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section>
            <h2>Infinity State</h2>
            <form>
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button type="button" onClick={add}>Novo</button>
                <button type="button" onClick={getTodos}>Async Promise</button>
                <button type="button" onClick={context.mutations.reset}>RESET</button>
            </form>
        </section>
    );
}

export default TodoForm;


