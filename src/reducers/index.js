import * as Types from '../constants'
import TodoAPI from "../api/TodoAPI";

let initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TODO:
            state.todos = action.todos.concat();
            return {todos:state.todos};
        case Types.FILETER_TODO_LIST:
            return Object.assign({}, state, {
                todos: action.todos
            });
        case Types.UPDATE_TODO_STATUS:
            return Object.assign({}, state, {
                todos: action.todos
            });
        case Types.UPDATE_TODO_CONTENT:
            return Object.assign({}, state, {
                todos: action.todos
            });
        default:
            return state;
    }
}