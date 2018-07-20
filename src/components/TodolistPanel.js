import React, {Component} from 'react';
import TodolistItem from './TodolistItem';
import './TodolistPanel.css'

class TodolistPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {todos} = this.props;
        let todoItems = todos.map(todo => {
            return <TodolistItem
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