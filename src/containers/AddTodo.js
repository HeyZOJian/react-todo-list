import AddTodo from "../components/AddTodo";
import {connect} from 'react-redux';
import {addTodo} from "../actions";

const mapStateToProps = (state, props) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addTodo: (id, content) => dispatch(addTodo(id, content))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
