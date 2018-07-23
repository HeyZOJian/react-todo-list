import React, {Component} from 'react';
import '../index.css';
import TodolistPanel from '../containers/TodoPanelContainer'
import AddTodo from '../containers/AddTodo';
import Filter from '../containers/FilterButton';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Row, Col} from 'antd';
import { Tabs } from 'antd';
import { Divider } from 'antd';
class App extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Router>
                            <div className="App">
                                <div className="container">
                                    <div>
                                        <h2>Jquery To Do List</h2>
                                        <p>
                                            <em>Simple Todo List with adding and filter by diff status.</em>
                                        </p>
                                    </div>
                                    <AddTodo/>

                                    <Divider/>
                                    {/*<Filter/>*/}
                                    <Route strict exact path="/" component={TodolistPanel}/>
                                    <Route strict path="/:status" component={TodolistPanel}/>
                                </div>
                            </div>
                        </Router>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </div>

        );

    }
}

export default App;
