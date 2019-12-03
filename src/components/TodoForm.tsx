

import "./../styles.css";
import React, { useState } from "react";
import { state as stateContext } from "../state/state";


const TodoForm = () => {

    const [inputText, setInputText] = useState('')

    const add = () => {
        stateContext.mutations.addTodo({
            text: inputText,
            complete: false, id: Math.random().toString()
        })
        setInputText('')
    }

    return (
        <section>
            <h2>RMS -> Reactive Management State</h2>
            <form>
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button type="button" onClick={add}>Novo</button>
                <button type="button" onClick={stateContext.mutations.fetch}>Async Promise</button>
                <button type="button" onClick={stateContext.mutations.reset}>RESET</button>
            </form>
        </section>
    );
}

export default TodoForm;


