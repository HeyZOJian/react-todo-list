import React, {Component} from 'react';
import '../index.css'
import Checkbox from '@material-ui/core/Checkbox';
import Todo from '../Models/Todo';
import {Radio} from 'antd';


export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'read'
        }
    }

    changeToEditable = () => {
        this.setState({status: 'write'});
    }

    updateItem = (event, id, content) => {
        if (event.keyCode === 13) {
            this.props.updateItemContent(id, content);
            this.setState({status: 'read'});
        }
    }

    render() {

        let {id, editable, content, status, handleChange} = this.props;
        return (
            <li style={{textDecoration: status === Todo.COMPLETED ? 'line-through' : 'none'}}
                contentEditable={editable}>
                <Radio
                    checked={status === Todo.COMPLETED}
                    onClick={() => handleChange(id,
                        status === Todo.COMPLETED
                            ? Todo.ACTIVE
                            : Todo.COMPLETED)}></Radio>
                <span onDoubleClick={this.changeToEditable}>
                    {this.state.status === 'read' ? (
                        content
                    ) : (<input
                        autoFocus
                        className="edit-input"
                        defaultValue={content}
                        onKeyUp={e =>
                            this.updateItem(e, id, e.currentTarget.value)
                        }/>)}
                </span>

            </li>
        )
    }
}