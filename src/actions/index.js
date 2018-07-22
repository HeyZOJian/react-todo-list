import * as Types from '../constants'

export const initTodos = (todos)=>{
    return {
        type: Types.INIT,
        todos
    }
}

export const addTodo = (todo) => {
    return {
        type: Types.ADD_TODO,
        todo
    }
}

export const getFilterTodoList = (todos) =>{
    return {
        type:Types.FILETER_TODO_LIST,
        todos
    }
}

export const updateTodoStatus = (todos)=>{
    return {
        type: Types.UPDATE_TODO_STATUS,
        todos
    }
}

export const updateItemContent = (todos)=>{
    return {
        type: Types.UPDATE_TODO_CONTENT,
        todos
    }
}