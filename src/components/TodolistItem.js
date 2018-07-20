import React, {Component} from 'react';
import './TodolistItem.css'
import Checkbox from '@material-ui/core/Checkbox';

export default class TodolistItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {content, editable, hasCompleted, handleDoubleClick, handleEnter, handleChange} = this.props;
        return (
            <li style={{textDecoration: hasCompleted ? 'line-through' : 'none'}}
                contentEditable={editable}
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleEnter}>
                <Checkbox
                    checked={hasCompleted ? 'checked' : ''}
                    onChange={handleChange}/>
                {content}
            </li>
        );
    }
}