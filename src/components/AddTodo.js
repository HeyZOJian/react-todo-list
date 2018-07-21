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
        this.props.addTodo(content);
        this.inputContent.current.value = ""
    }

    render() {
        return <div>
            <input
                className="input-text"
                type="text"
                name="ListItem"
                ref={this.inputContent}/>
            <div
                id="button"
                onClick={this.handleInput}>Add
            </div>
        </div>
    }
}

export default AddTodo;