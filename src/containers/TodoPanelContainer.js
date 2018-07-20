import TodolistPanel from "../components/TodolistPanel";
import {connect} from 'react-redux';
import TodoAPI from '../api/TodoAPI'
import {updateTodoStatus} from '../actions'

const mapStateToProps = (state, props) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChange:(id)=>{
            const todos = TodoAPI.updateTodoStatus(id);
            dispatch(updateTodoStatus(id,todos));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodolistPanel)