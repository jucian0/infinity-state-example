import Axios from "axios";
import { Method, state, Service } from './../lib'

export type TodoType = {
    id: string
    text: string,
    complete: boolean
}

export interface StateTodo {
    todos: Array<TodoType>;
    loading: boolean;
}

const INITIAL_STATE: StateTodo = {
    todos: [],
    loading: false
};

const removeTodo: Method<StateTodo, string> = ({ state, payload }) => ({
    ...state,
    todos: state.todos.filter(item => item.id !== payload)
})

const addTodo: Method<StateTodo, TodoType> = ({ state, payload }) => ({
    ...state,
    todos: state.todos.concat(payload)
})

const toggleTodo: Method<StateTodo, string> = ({ state, payload }) => ({
    ...state,
    todos: state.todos.map(item => ({
        ...item,
        complete: item.id === payload ? !item.complete : item.complete
    }))
})

const success: Method<StateTodo, Array<any>> = ({ state, payload }) => ({
    ...state,
    todos: [...state.todos, ...payload.map((item: any) => ({
        id: item.id,
        text: item.slug,
        complete: false
    }))]
})

const error: Method<StateTodo, string> = ({ state, payload }) => ({
    ...state,
})

const fetch: Service<StateTodo> = () =>
    Axios.get('http://www.hackintoshworld.com/wp-json/wp/v2/posts')
        .then(resp => context.mutations.success(resp.data))
        .catch(err => context.mutations.error(err.data))


const reset = () => INITIAL_STATE

export const context = state({
    state: INITIAL_STATE,
    methods: {
        addTodo,
        removeTodo,
        toggleTodo,
        reset,
        success,
        error
    },
    services: {
        fetch
    }
})


