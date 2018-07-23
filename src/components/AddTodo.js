import React, {Component} from 'react';
import '../index.css'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';


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

            <Input
                size="large"
                placeholder="Add new Todo"
                ref={this.inputContent}
                onKeyDown={this.handleEnter}
            />
            <Button type="primary" shape="circle" icon="add" size="large" onClick={this.handleInput} />

            {/*<input*/}
                {/*className="input-text"*/}
                {/*type="text"*/}
                {/*name="ListItem"*/}
                {/*ref={this.inputContent}*/}
                {/*onKeyDown={this.handleEnter}*/}
            {/*/>*/}
            <div
                id="button"
                onClick={this.handleInput}>Add
            </div>
        </div>
    }
}

export default AddTodo;