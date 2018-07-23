import React, {Component} from 'react';
import '../index.css';
import TodolistPanel from '../containers/TodoPanelContainer'
import AddTodo from '../containers/AddTodo';
import Filter from '../containers/FilterButton';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

    render() {
        return (
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
                        <br/>
                        <ol id="items">
                            <Route strict exact path="/" component={TodolistPanel}/>
                            <Route strict path="/:status" component={TodolistPanel}/>
                        </ol>
                        <Filter/>

                    </div>
                </div>
            </Router>
        );

    }
}

export default App;
