import * as Types from '../constants'
import Todo from "../Models/Todo";

const TodoAPI = {
    todos: [],

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
            console.log("| show_active: " + Todo.ACTIVE);
            console.log("-------------------------------------");
            return this.todos.filter(todo => todo.status === Todo.ACTIVE)
        }
        else if (status === Types.SHOW_COMPLETED) {
            console.log("-------------------------------------");
            console.log("| show_completed: " );
            console.log("-------------------------------------");
            return this.todos.filter(todo => todo.status === Todo.COMPLETED)
        }
    },
    updateTodoStatus(id){
        return this.todos.map(todo=>{
            if(todo.id===id){
                todo.hasCompleted = !todo.hasCompleted;
                return todo;
            }
            return todo;
        })
    }
}
export default TodoAPI;