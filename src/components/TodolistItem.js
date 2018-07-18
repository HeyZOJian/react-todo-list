import React, {Component} from 'react';
import './TodolistItem.css'
import Checkbox from '@material-ui/core/Checkbox';
export default class TodolistItem extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedClass:""}
  }

  handleChange = () => {
      let checkedClass = this.props.info.hasCompleted==false?"":"checked";
      this.setState({checkedClass});
      this.props.onToggle(this.props.info);
      
  }
  render() {
    let checkedClass = this.props.info.hasCompleted==false?"":"checked";
    return (
      <li className={checkedClass}>
        <Checkbox checked={this.props.info.hasCompleted} onChange={this.handleChange}/> 
        {this.props.content}
      </li>
    );
  }
}