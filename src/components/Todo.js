import React, {Component} from 'react';
import '../index.css'
import Checkbox from '@material-ui/core/Checkbox';

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id,content, editable, hasCompleted, handleDoubleClick, handleEnter, handleChange} = this.props;
        return (
            <li style={{textDecoration: hasCompleted ? 'line-through' : 'none'}}
                contentEditable={editable}
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleEnter}>
                <input name="done-todo" type="checkbox" className="done-todo"
                       checked={hasCompleted ? 'checked' : ''} onClick={()=>handleChange(id)}/>
                {content}
            </li>
        )
    }
}