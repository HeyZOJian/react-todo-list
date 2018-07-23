import React, {Component} from 'react';
import * as Types from '../constants'
import Todo from "../Models/Todo";
import TodoAPI from "../api/TodoAPI";
import { Breadcrumb } from 'antd';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {filterTodoList} = this.props;
        console.log("-------------------------------------");
        console.log("|TodoAPI.nowFilter : " + TodoAPI.nowFilter);
        console.log("-------------------------------------");
        return <Breadcrumb>
            <Breadcrumb.Item onClick={() => filterTodoList(Todo.ALL)}><a href="../">All</a></Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => filterTodoList(Todo.ACTIVE)}><a href="/active">Active</a></Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => filterTodoList(Todo.COMPLETED)}><a href="/completed">Completed</a></Breadcrumb.Item>
        </Breadcrumb>
    }
}

export default Filter;