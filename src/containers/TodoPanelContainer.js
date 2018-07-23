import TodolistPanel from "../components/TodolistPanel";
import {connect} from 'react-redux';
import TodoAPI from '../api/TodoAPI'
import {updateTodoStatus, updateItemContent, getFilterTodoList} from '../actions'
import Todo from "../Models/Todo";

const mapStateToProps = (state, props) => {

    let status = undefined;
    if (props.match !== undefined) {
        status = props.match.params.status;
    }


    let todos = [];
    if (state.todos !== undefined) {
        TodoAPI.nowFilter = status===undefined?Todo.ALL:status;
        todos = state.todos.filter(todo => {
            if (status === undefined) return true;
            return todo.status === status;
        })
    }

    return {
        todos,
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChange: (id, status) => {
            TodoAPI.updateTodoStatus(id, status, todos => dispatch(getFilterTodoList(todos)));
        },
        updateItemContent: (id, content) => {
            TodoAPI.updateItemContent(id, content, todos => dispatch(getFilterTodoList(todos)));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodolistPanel)