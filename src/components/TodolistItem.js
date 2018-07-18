import React, {Component} from 'react';
import './TodolistItem.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
export default class TodolistItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {   content: "Parking Lot APP Refactor" }
  }
  render() {
    return (
          <li>
            <Checkbox
            //   onChange={this.handleChange('checkedA')}
            />
            {this.props.content}
          </li>
    );
  }
}