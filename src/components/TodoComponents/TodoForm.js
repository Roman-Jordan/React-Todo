// your components will all go in this `component` directory.
// feel free to change this component.js into TodoForm.js
import React from 'react';


export default class ToDoForm extends React.Component{
    constructor(props){
        super()
        this.state = {
            superState : props.state,
            addTask: ""
        }
        this.props = props;
    }   

    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    taskSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.addTask);
        this.setState({
            addTask:""
        })
    }

    
    
    render(){
        return(
            <form onSubmit={this.taskSubmit}> 
                <input 
                    type="text" 
                    name="addTask" 
                    value={this.state.addTask} 
                    placeholder="Add Task"
                    onChange={this.inputChange}
                />
                <button type="submit">Add</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )}
}



