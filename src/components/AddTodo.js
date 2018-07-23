import React, {Component} from 'react';
import '../index.css'
import {Input} from 'antd';
import 'antd/dist/antd.css';
import {Button} from 'antd';
import {Row, Col} from 'antd';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state={inputContent:""};
    }

    handleChange(e) {
        this.setState({
            inputContent: e.target.value
        })
    }

    handleInput = (ev) => {
        const content = this.state.inputContent;
        if (ev.keyCode !== 13) return;
        if (content.trim() !== "") {
            this.props.addTodo(content);
        }
        this.setState({inputContent:""});
    };

    handleClick = ()=>{
        const content = this.state.inputContent;
        if (content.trim() !== "") {
            this.props.addTodo(content);
        }
        this.setState({inputContent:""});
    }

    render() {
        return <Row gutter={8}>
            <Col span={15}>
                <Input
                    size="large"
                    value={this.state.inputContent}
                    placeholder="Add new Todo"
                    onChange={(e) => this.handleChange(e)}
                    onKeyDown={this.handleInput}
                />
            </Col>
            <Col span={3}>
                <Button
                    type="primary"
                    icon="plus"
                    size="large"
                    onClick={this.handleClick}>
                    Add Todo
                </Button>
            </Col>
        </Row>
    }
}

export default AddTodo;