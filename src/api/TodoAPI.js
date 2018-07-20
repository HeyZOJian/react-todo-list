import * as Types from '../constants'

const TodoAPI = {
    todos: [{id: 1, content: 'test-1', editable: false, hasCompleted: false},
        {id: 2, content: 'test-2', editable: true, hasCompleted: true}],

    addTodo(todo) {
        this.todos.push(todo)
    },

    filterList(status) {
        if (status === Types.SHOW_ALL) {
            console.log("-------------------------------------");
            console.log("| show_all: ");
            console.log("-------------------------------------");
            return this.todos
        }
        else if (status === Types.SHOW_ACTIVE) {
            console.log("-------------------------------------");
            console.log("| show_active: " + this.todos);
            console.log("-------------------------------------");
            return this.todos.filter(todo => todo.hasCompleted === false)
        }
        else if (status === Types.SHOW_COMPLETED) {
            console.log("-------------------------------------");
            console.log("| show_completed: " );
            console.log("-------------------------------------");
            return this.todos.filter(todo => {
                return todo.hasCompleted === true
            })
        }
    }
}
export default TodoAPI;