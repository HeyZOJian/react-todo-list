import TodolistPanel from "../components/TodolistPanel";
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodolistPanel)