import React, {Component} from 'react';
import TodolistItem from '../components/TodolistItem';
import './TodolistPanel.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
  showAllItems = () => {
    this.setState({page: 'all'});
  }
  showActiveItems = () => {
    this.setState({page: 'active'});
  }
  showCompleteItems = () => {
    this.setState({page: 'complete'});
  }
  onToggle = (item) => {
    let {todoItems} = this.state;

    todoItems = todoItems.map(elt => {

      if (elt.id === item.id) {
        elt.hasCompleted = !elt.hasCompleted; //选择状态取反
      }
      return elt;
    });
    this.setState({todoItems})
  }

  render() {
    let {todoItems, inputContent, page} = this.state;
    let {
      inputChange,
      handleKeyDownPost,
      showActiveItems,
      showAllItems,
      showCompleteItems,
      onToggle
    } = this;
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
      return (<TodolistItem {...{ content:elt.content,onToggle,info:elt }} key={i}/>)
    });

    return <div className="container">
      <br/>

      <TextField id="search" label="Add new Todo item" type="search" margin="normal" // fullWidth ="true"
        value={inputContent} onChange={inputChange} onKeyDown={handleKeyDownPost}/>
      <br/>

      <Button 
      variant="contained" 
      size="small" 
      onClick={showAllItems}
      style={{
        margin: 5
      }}>
        All
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={showActiveItems}
        style={{
        margin: 5
      }}>
        Active
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={showCompleteItems}
        style={{
        margin: 5
      }}>
        complete
      </Button>

      <ol>
        {items}
      </ol>
    </div>

  }
}