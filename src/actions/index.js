import * as Types from '../constants'

export const addTodo = (inputContent) => {
    return {
        type: Types.ADD_TODO,
        inputContent
    }
}