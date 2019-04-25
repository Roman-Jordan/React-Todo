// your components will all go in this `component` directory.
// feel free to change this component.js into TodoForm.js
import React from 'react';


function ToDoForm(props){
    return(
        <form onSubmit={props.updateList}>
            <input onChange={props.onChange} name="task" type="text" value={props.task} />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default ToDoForm;

