import * as Types from '../constants'

let initialState = {
    todos:[{id: 1, content: 'test-1', editable: false, hasCompleted: false},
        {id: 2, content: 'test-2', editable: true, hasCompleted: true}],
    visibilityFilter : 'SHOW_ALL'
}

export default (state = initialState, action)=>{
    switch (action.type){
        case Types.ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    {
                        id:action.id,
                        content:action.content,
                        completed: false
                    }
                ]
            })
        case Types.FILETER_TODO_LIST:
            visibilityFilter:action.status;
            console.log("-------------------------------------");
            console.log("reducer-todos:" + action.todos);
            console.log("-------------------------------------");
            return Object.assign({},state,{
                todos:action.todos
            })
        case Types.UPDATE_TODO_STATUS:
            return action.todos;
        default:
            return state;
    }
}