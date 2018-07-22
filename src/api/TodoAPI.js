import * as Types from '../constants'
import Todo from "../Models/Todo";

const TodoAPI = {
    todos: [],
    nowFilter: Types.SHOW_ALL,

    getNowFilter(){
        return this.nowFilter;
    },

    addTodo(todo) {
        this.todos.push(todo)
    },

    filterList(status) {
        if (status === Types.SHOW_ALL) {
            this.nowFilter = Types.SHOW_ALL;
            return this.todos
        }
        else if (status === Types.SHOW_ACTIVE) {
            this.nowFilter = Types.SHOW_ACTIVE;
            return this.todos.filter(todo => todo.status === Todo.ACTIVE)
        }
        else if (status === Types.SHOW_COMPLETED) {
            this.nowFilter = Types.SHOW_COMPLETED
            return this.todos.filter(todo => todo.status === Todo.COMPLETED)
        }
    },
    updateTodoStatus(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.status = todo.status==Todo.ACTIVE?Todo.COMPLETED:Todo.ACTIVE;
                return todo;
            }
            return todo;
        });
        return this.filterList(this.nowFilter);
    },
    updateItemContent(id,content){
        this.todos = this.todos.map(todo=>{
            if(todo.id===id){
                todo.content = content;
                return todo;
            }
            return todo;
        })
        return this.filterList(this.nowFilter);
    }
};
export default TodoAPI;