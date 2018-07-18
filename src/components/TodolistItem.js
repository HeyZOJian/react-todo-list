import React, {Component} from 'react';
import './TodolistItem.css'
import Checkbox from '@material-ui/core/Checkbox';
export default class TodolistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedClass: "",
      editable:false
    }
  }

  handleChange = () => {
    let checkedClass = this.props.info.hasCompleted == false
      ? ""
      : "checked";
    this.setState({checkedClass});
    this.props.onToggle(this.props.info);

  }

  handleDoubleClick = ()=>{
      this.setState({editable:true});
  }

  handleEnter = (event)=>{
      if(event.keyCode == 13){
        this.setState({editable:false});
      }
  }

  render() {
    let {editable} = this.state;
    let {handleDoubleClick, handleEnter} = this;
    let checkedClass = this.props.info.hasCompleted == false
      ? ""
      : "checked";
    return (
      <li className={checkedClass} contentEditable={editable} onDoubleClick={handleDoubleClick} onKeyDown={handleEnter}>
        <Checkbox checked={this.props.info.hasCompleted} onChange={this.handleChange}/> {this.props.content}
      </li>
    );
  }
}