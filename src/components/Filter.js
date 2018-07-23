import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import * as Types from '../constants'
import Todo from "../Models/Todo";
import TodoAPI from "../api/TodoAPI";

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {filterTodoList} = this.props;
        console.log("-------------------------------------");
        console.log("|TodoAPI.nowFilter : " +TodoAPI.nowFilter );
        console.log("-------------------------------------");
        return <div>

            <ul id="filters">
                <li>
                    <a href="/" data-filter="all" className={TodoAPI.nowFilter===undefined?'selected':''} onClick={() => filterTodoList(Todo.ALL)}>ALL</a>
                </li>
                <li>
                    <a href="active" data-filter="active" className={TodoAPI.nowFilter==='active'?'selected':''} onClick={() => {
                        filterTodoList(Todo.ACTIVE)
                    }}>Active</a>
                </li>
                <li>
                    <a href="completed" data-filter="complete" className={TodoAPI.nowFilter==='completed'?'selected':''} onClick={() => {
                        filterTodoList(Todo.COMPLETED)
                    }}>Complete</a>
                </li>
            </ul>


        </div>
    }
}

export default Filter;