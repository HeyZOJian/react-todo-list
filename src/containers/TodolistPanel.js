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
    let {todoItems, inputContent, page} = this.state;
    let items = todoItems.filter((element) => {
      switch (page) {
        case 'all':
          return true;
        case 'complete':
          return element.hasCompleted;
        case 'active':
          return !element.hasCompleted;
      }
    })
    items = items.map((elt, i) => {
      return (<TodolistItem {...{ content:inputContent }} key={i}/>)
    });
    console.log(items);

    let footer = "";
    let {inputChange, handleKeyDownPost} = this;
    return <div className="header">
      <br/>
      <input
        type="text"
        className="todo-input"
        value={inputContent}
        onChange={inputChange}
        onKeyDown={handleKeyDownPost}/>
        <TodolistItem content="1"/>
        {footer}
    </div>
   
  }
}