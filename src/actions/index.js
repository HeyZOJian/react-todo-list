import * as Types from '../constants'

export const addTodo = (id, content) => {
    return {
        type: Types.ADD_TODO,
        id,
        content
    }
}

export const getFilterTodoList = (status,todos) =>{
    return {
        type:Types.FILETER_TODO_LIST,
        status,
        todos
    }
}