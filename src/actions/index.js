import * as Types from '../constants'

export const addTodo = (todo) => {
    return {
        type: Types.ADD_TODO,
        todo:todo
    }
}

export const getFilterTodoList = (status,todos) =>{
    return {
        type:Types.FILETER_TODO_LIST,
        status,
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