import AddTodo from "../components/AddTodo";
import {connect} from 'react-redux';
import {addTodo, initTodos} from "../actions";
import TodoAPI from '../api/TodoAPI';
import Todo from "../Models/Todo";

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addTodo: (content) => {
            const newTodo = new Todo(content);
            TodoAPI.addTodo(newTodo);
            // dispatch(addTodo(newTodo))
            TodoAPI.getAllTodo(todos => dispatch(initTodos(todos)));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
