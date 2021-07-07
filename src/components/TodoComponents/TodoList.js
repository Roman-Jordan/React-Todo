// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

export  default function TodoList(props){
 

        return(
            <div className="todoList">
                {props.list.map(item =>(
                    <ToDo key={item.id} item={item} taskStatus={props.taskStatus} />

                ))}
            </div>
        )
}



