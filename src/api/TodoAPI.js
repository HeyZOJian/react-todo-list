import * as Types from '../constants'
import Todo from "../Models/Todo";
import axios from 'axios'

const TodoAPI = {
    nowFilter: Todo.ALL,
    apiUrl: 'http://localhost:9999/api/todos',

    getAllTodo(successCallBack) {
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=completed,active`)
            .then((response) => {
                successCallBack(response.data._embedded.todos);
            })
            .catch((error) => {
                console.log(error);
            })
    },

    addTodo(todo, successCallback) {
        axios.post(`${this.apiUrl}`, todo)
            .then((response) => {
                this.todos.push(todo);
            })
            .catch(error => {
                console.log(error);
            })

    },

    filterList(status, successCallback) {
        console.log("-------------------------------------");
        console.log(" filter:");
        console.log("-------------------------------------");
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${status}`)
            .then((response) => {
                this.nowFilter = status;
                successCallback(response.data._embedded.todos);
            })
            .catch(error => {
                console.log(error);
            });
    },
    updateTodoStatus(id, status,callback) {
        axios.patch(`${this.apiUrl}/${id}`, {"status": status})
            .then(response => {
                this.filterList(this.nowFilter,callback);
            })
            .catch(error => {
                console.log(error);
            })
    },
    updateItemContent(id, content,callback) {
        axios.patch(`${this.apiUrl}/${id}`, {"content": content})
            .then(response => {
                this.filterList(this.nowFilter,callback);
            })
            .catch(error => {
                console.log(error);
            })
    }
};
export default TodoAPI;