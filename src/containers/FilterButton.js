import {connect} from 'react-redux';
import TodoAPI from '../api/TodoAPI'
import Filter from "../components/Filter";
import {getFilterTodoList} from '../actions'

const mapStateToProps = (status, props) => {

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterTodoList:(status)=>{
            const todos = TodoAPI.filterList(status);
            console.log("-------------------------------------")
            console.log("dispatch-todos :" + todos);
            console.log("-------------------------------------")
            dispatch(getFilterTodoList(status,todos));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)