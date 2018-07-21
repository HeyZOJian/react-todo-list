import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import * as Types from '../constants'

class Filter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {filterTodoList} = this.props;
        console.log("-------------------------------------");
        console.log("| : " + filterTodoList);
        console.log("-------------------------------------");
        return <div>

            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" className="all" onClick={() => filterTodoList(Types.SHOW_ALL)}>ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" className="active" onClick={() => {
                        filterTodoList(Types.SHOW_ACTIVE)
                    }}>Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" className="" onClick={() => {
                        filterTodoList(Types.SHOW_COMPLETED)
                    }}>Complete</a>
                </li>
            </ul>


        </div>
    }
}

export default Filter;