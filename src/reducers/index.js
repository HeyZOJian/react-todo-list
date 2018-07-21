import * as Types from '../constants'

let initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    action.todo

                ]
            })
        case Types.FILETER_TODO_LIST:
            visibilityFilter:action.status;
            console.log("-------------------------------------");
            console.log("reducer-todos:" + action.todos);
            console.log("-------------------------------------");
            return Object.assign({}, state, {
                todos: action.todos
            })
        case Types.UPDATE_TODO_STATUS:

            return Object.assign({}, state, {
                todos: action.todos
            });
        default:
            return state;
    }
}