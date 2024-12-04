This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Codesandbox

https://codesandbox.io/s/infinity-state-f5jhd

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




```TSX

  const [todosState, { toggleTodo, removeTodo }] = useMState(context)

  const [todos, { toggleTodo, removeTodo }] = useMState(context, state=> state.todos)

  useSubscribe(context, "toggleTodo", () => {
    //execute side effect when async actions happen
  })
  
```

```Typescript

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

const error: Method<StateTodo, string> = ({ state }) => ({
    ...state,
})

const fetch: Service<StateTodo> = () =>
    Axios.get('http://www.hackintoshworld.com/wp-json/wp/v2/posts')
        .then(resp => context.mutations.success(resp.data))
        .catch(err => context.mutations.error(err.data))


const reset = () => INITIAL_STATE

export const context = state({
    state: INITIAL_STATE,
    sync: {
        addTodo,
        removeTodo,
        toggleTodo,
        reset,
        success,
        error
    },
    async: {
        fetch
    }
})

```
