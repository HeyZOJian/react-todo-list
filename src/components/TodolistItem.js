import React, {Component} from 'react';
import './TodolistItem.css'
export default class TodolistItem extends Component {
  constructor(props) {
      super(props);
      this.state={
          content:"Parking Lot APP Refactor"
      }
  }
  render() {
    return (
      <li class="checked">
        <input name="done-todo" type="checkbox" class="done-todo" checked/>
        {this.props.content}
      </li>
    );
  }
}