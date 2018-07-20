import React, {Component} from 'react';
import TodoComponent from './TodoComponent';
import '../index.css'
import TodoAPI from '../api/TodoAPI'

class TodolistPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let {visibilityFilter} = this.props;
        // const todos = TodoAPI.filterList(visibilityFilter);
        let {todos} = this.props;
        console.log("-------------------------------------");
        console.log("| todos-1: " + this.props);
        console.log("-------------------------------------");
        let todoItems = todos.map(todo => {
            return <TodoComponent
                {...todo}
            />
        })

        return <div>
            <ol>
                {todoItems}
            </ol>
        </div>

    }
}

export default TodolistPanel;