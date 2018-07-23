import React, {Component} from 'react';
import * as Types from '../constants'
import Todo from "../Models/Todo";
import TodoAPI from "../api/TodoAPI";
import {Badge} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {filterTodoList} = this.props;
        console.log("-------------------------------------");
        console.log("|TodoAPI.nowFilter : " + TodoAPI.nowFilter);
        console.log("-------------------------------------");
        return <Row gutter={16}>
                <Col span={8}>
                    <Badge count={4}>
                        <Button type="primary">
                            <a href="/" data-filter="all" className={TodoAPI.nowFilter === undefined ? 'selected' : ''}
                               onClick={() => filterTodoList(Todo.ALL)}>ALL</a>
                        </Button>
                    </Badge>
                </Col>
                <Col span={8}>
                    <Badge count={4}>
                        <Button>
                            <a href="active" data-filter="active"
                               className={TodoAPI.nowFilter === 'active' ? 'selected' : ''}
                               onClick={() => {
                                   filterTodoList(Todo.ACTIVE)
                               }}>Active</a>
                        </Button>
                    </Badge>
                </Col>
                <Col span={8}>
                    <Badge count={4}>
                        <Button>
                            <a href="completed" data-filter="complete"
                               className={TodoAPI.nowFilter === 'completed' ? 'selected' : ''} onClick={() => {
                                filterTodoList(Todo.COMPLETED)
                            }}>Complete</a>
                        </Button>
                    </Badge>
                </Col>
            </Row>
    }
}

export default Filter;