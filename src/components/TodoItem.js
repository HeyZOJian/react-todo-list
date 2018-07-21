import React, {Component} from 'react';
import '../index.css'
import Checkbox from '@material-ui/core/Checkbox';
import Todo from '../Models/Todo';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id, content, editable, status, handleDoubleClick, handleEnter, handleChange} = this.props;
        
        console.log("-------------------------------------");
        console.log("todo-status :" + status);
        console.log("-------------------------------------");
        return (
            <li style={{textDecoration: status == Todo.COMPLETED ? 'line-through' : 'none'}}
                contentEditable={editable}
                onDoubleClick={handleDoubleClick}
                onKeyDown={handleEnter}>
                <input name="done-todo" type="checkbox" className="done-todo"
                       checked={status == Todo.COMPLETED ? 'checked' : ''} onClick={() => handleChange(id)}/>
                {content}
            </li>
        )
    }
}