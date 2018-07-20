import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../index.css'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.inputContent = React.createRef();
    }

    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }

    handleInput = () => {
        const content = this.inputContent.current.value;
        const id = this.uuid();
        this.props.addTodo(id, content);
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