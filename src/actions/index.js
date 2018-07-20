import * as Types from '../constants'

export const addTodo = (content) => {
    return {
        type: Types.ADD_TODO,
        content
    }
}