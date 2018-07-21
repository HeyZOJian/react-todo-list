import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../index.css'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.inputContent = React.createRef();
    }

    handleInput = () => {
        const content = this.inputContent.current.value;
        if(content.trim()!="") {
            this.props.addTodo(content);
        }
        this.inputContent.current.value = ""
    }
    handleEnter = (ev) =>{
        if(ev.keyCode !== 13) return;
        this.handleInput();
    }

    render() {
        return <div>
            <input
                className="input-text"
                type="text"
                name="ListItem"
                ref={this.inputContent}
                onKeyDown={this.handleEnter}
            />
            <div
                id="button"
                onClick={this.handleInput}>Add
            </div>
        </div>
    }
}

export default AddTodo;