import React, {Component} from 'react';
import Todo from './Todo';
import '../index.css'
import TodoAPI from '../api/TodoAPI'

class TodolistPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { todos, handleChange} = this.props;
        console.log("-------------------------------------");
        console.log("| todopanel-todos: " + this.props.todos);
        console.log("-------------------------------------");
        let todoItems = todos.map(todo => {
            return <Todo
                {...todo}
                handleChange={handleChange}
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