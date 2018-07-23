import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import * as Types from '../constants'
import Todo from "../Models/Todo";

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {filterTodoList} = this.props;
        return <div>

            <ul id="filters">
                <li>
                    <a href="../" data-filter="all" className="all" onClick={() => filterTodoList(Todo.ALL)}>ALL</a>
                </li>
                <li>
                    <a href="active" data-filter="active" className="active" onClick={() => {
                        filterTodoList(Todo.ACTIVE)
                    }}>Active</a>
                </li>
                <li>
                    <a href="completed" data-filter="complete" className="" onClick={() => {
                        filterTodoList(Todo.COMPLETED)
                    }}>Complete</a>
                </li>
            </ul>


        </div>
    }
}

export default Filter;