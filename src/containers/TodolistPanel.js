import React, {Component} from 'react';
import TodolistItem from '../components/TodolistItem';
import './TodolistPanel.css'
export default class TodolistPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      inputContent: "",
      page: "all"
    }
  }

  inputChange = (event) => {
    this.setState({inputContent: event.target.value});
  }

  handleKeyDownPost = (event) => {
    if (event.keyCode !== 13) 
      return;
    
    let {inputContent} = this.state;
    let value = inputContent.trim();

    if (value === "") 
      return;
    
    let todoListItem = {};
    todoListItem.id = new Date().getTime();
    todoListItem.content = inputContent;
    todoListItem.hasCompleted = false;

    let {todoItems} = this.state;

    todoItems.push(todoListItem);

    this.setState({todoItems, inputContent: ""});
  }
  render() {
    let items = "";
    let footer = "";
    let {inputContent, inputChange, handleKeyDownPost} = this;
    return <header className="header">
      <br/>
      <input
        type="text"
        className="todo-input"
        value={inputContent}
        onChange={inputChange}
        onKeyDown={handleKeyDownPost}/>
    </header>
    {
      items
    }
    {footer}

  }
}