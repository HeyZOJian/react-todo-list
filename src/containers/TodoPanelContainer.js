import TodolistPanel from "../components/TodolistPanel";
import {connect} from 'react-redux';
import TodoAPI from '../api/TodoAPI'
import {updateTodoStatus, updateItemContent, getFilterTodoList} from '../actions'

const mapStateToProps = (state, props) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChange: (id,status) => {
            TodoAPI.updateTodoStatus(id,status,todos=>dispatch(getFilterTodoList(todos)));
        },
        updateItemContent :(id, content)=>{
            TodoAPI.updateItemContent(id,content,todos=>dispatch(getFilterTodoList(todos)));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodolistPanel)