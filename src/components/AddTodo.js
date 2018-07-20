import React, {Component} from 'react';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.inputContent = React.createRef();
    }
    
    handleInput = ()=>{
        console.log("-------------------------------------");
        console.log("| inputContent: " + this.inputContent.value);
        console.log("-------------------------------------");
    }

    render(){
        const {inputContent, addTodo} = this.props;
        console.log("-------------------------------------");
        console.log("| addTodo: " + addTodo);
        console.log("-------------------------------------");
        
        console.log("-------------------------------------");
        console.log("| inputContent: " + inputContent);
        console.log("-------------------------------------");
        return <div>
            <input ref={this.inputContent}/>
            <button onClick={this.handleInput}>Add Todo</button>
        </div>
    }
}

export default AddTodo;