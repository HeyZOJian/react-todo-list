import React, {Component} from 'react';
import './TodolistItem.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
export default class TodolistItem extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedClass:""}
  }

  handleChange = () => {
      let checkedClass = this.state.checkedClass?"":"checked";
      this.setState({checkedClass});
      
  }
  render() {
    return (
      <li className={this.state.checkedClass}>
        <Checkbox onChange={this.handleChange}/> {this.props.content}
      </li>
    );
  }
}