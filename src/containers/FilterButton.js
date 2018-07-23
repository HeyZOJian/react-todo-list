import {connect} from 'react-redux';
import TodoAPI from '../api/TodoAPI'
import Filter from "../components/Filter";
import {getFilterTodoList} from '../actions'

const mapStateToProps = (status, props) => {
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterTodoList:(status)=>{
            TodoAPI.filterList(status,
                    todos=>dispatch(getFilterTodoList(todos)));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)