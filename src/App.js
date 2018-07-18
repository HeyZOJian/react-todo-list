import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodolistPanel from './containers/TodolistPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">TODO LIST</h1>
        </header>
        <TodolistPanel/>
      </div>
    );
  }
}

export default App;
