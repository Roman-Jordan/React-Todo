// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super();
        this.task = props.item.task;
        this.taskId = props.item.id;
        this.click = props.onClick;
    }
    
    render(){
        return(
            <div className="todoItem" onClick={this.click} id={this.taskId}>{this.task}</div>
        );
    }
}

export default TodoList;

