import * as Types from '../constants'
import TodoAPI from "../api/TodoAPI";


let initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.INIT:
            console.log("-------------------------------------");
            console.log("| reducer: ");
            console.log("-------------------------------------");
            return Object.assign({}, state, {
                todos: action.todos
            });
        case Types.ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos,action.todo]
            });
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