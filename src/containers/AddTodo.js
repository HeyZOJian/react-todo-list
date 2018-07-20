import AddTodo from "../components/AddTodo";
import {connect} from 'react-redux';
import {addTodo} from "../actions";

const mapStateToProps = (state, props) => {
    return {
        inputContent: state.inputContent,
        visibilityFilter : state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    addTodo : (inputContent) => dispatch(addTodo(inputContent))
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
