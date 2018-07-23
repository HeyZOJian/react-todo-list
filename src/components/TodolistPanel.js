import React, {Component} from 'react';
import TodoItem from './TodoItem';
import '../index.css'
import TodoAPI from '../api/TodoAPI'
import { List } from 'antd';
class TodolistPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {todos, handleChange, updateItemContent} = this.props;
        let todoItems = todos.map(todo => {
                return <TodoItem
                    {...todo}
                    handleChange={handleChange}
                    updateItemContent={updateItemContent}
                />
        })

        return <div>
            <List
                size="large"


                bordered
                dataSource={todoItems}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
            {/*<ol>*/}
                {/*{todoItems}*/}
            {/*</ol>*/}
        </div>

    }
}

export default TodolistPanel;