import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.inputContent = React.createRef();
    }

    handleInput = ()=>{
       const content = this.inputContent.current.value;
       this.props.addTodo(content);
       this.inputContent.current.value = ""
    }

    render(){
        return <div>
            <input ref={this.inputContent}/>
            <button onClick={this.handleInput}>Add Todo</button>
        </div>
    }
}

export default AddTodo;