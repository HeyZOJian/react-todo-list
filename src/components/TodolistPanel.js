import React, {Component} from 'react';
import TodoItem from './TodoItem';
import '../index.css'
import TodoAPI from '../api/TodoAPI'

class TodolistPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {todos, handleChange, updateItemContent} = this.props;
        console.log("-------------------------------------");
        console.log("todospanel-todos :" + todos);
        console.log("-------------------------------------");
        let todoItems = todos.map(todo => {
            return <TodoItem
                {...todo}
                handleChange={handleChange}
                updateItemContent={updateItemContent}
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