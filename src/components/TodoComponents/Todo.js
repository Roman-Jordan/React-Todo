// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
export default function ToDo(props){
    let classNames = "item";
    if (props.item.completed) {
        classNames += " completed";
    }
   
    const updateTaskStatus = e =>{
        props.taskStatus(props.item.id)
    }
    return(
        <div className={classNames} onClick={updateTaskStatus}>
            <p>{props.item.task}</p>
        </div>
    )
}

