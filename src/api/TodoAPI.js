import * as Types from '../constants'
import Todo from "../Models/Todo";
import axios from 'axios'

const TodoAPI = {
    todos: [],
    nowFilter: Types.SHOW_ALL,
    apiUrl: 'http://localhost:8080/api/todos',

    getAllTodo(successCallBack) {
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=completed,active`)
            .then((response) => {
                this.todos = response.data._embedded.todos;
                successCallBack(this.todos);
            })
            .catch((error) => {
                console.log(error);
            })
    },

    addTodo(todo) {
        axios.post(`${this.apiUrl}`, todo)
            .then((response) => {
                this.todos.push(todo);
            })
            .catch(error => {
                console.log(error);
            })

    },

    filterList(status,successCallback) {
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${status}`)
            .then((response) => {
                this.nowFilter = status;
                successCallback(response.data._embedded.todos);
            })
            .catch(error => {
                console.log(error);
            });
    },
    updateTodoStatus(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.status = todo.status === Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
                return todo;
            }
            return todo;
        });
        return this.filterList(this.nowFilter);
    },
    updateItemContent(id, content) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.content = content;
                return todo;
            }
            return todo;
        })
        return this.filterList(this.nowFilter);
    }
};
export default TodoAPI;