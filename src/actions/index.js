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

export const updateTodoStatus = (id, todos)=>{
    console.log("-------------------------------------");
    console.log("| update: ");
    console.log("-------------------------------------");
    return {
        type: Types.UPDATE_TODO_STATUS,
        id,
        todos
    }
}