import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'
import {Provider} from "react-redux"
import TodoAPI from "./api/TodoAPI";
import {initTodos} from "./actions";

const store = createStore(rootReducer)
const rootEl = document.getElementById('root')

TodoAPI.getAllTodo(todos => {
    return store.dispatch(initTodos(todos))
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)