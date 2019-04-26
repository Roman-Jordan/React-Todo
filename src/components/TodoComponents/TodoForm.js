// your components will all go in this `component` directory.
// feel free to change this component.js into TodoForm.js
import React from 'react';


export default class ToDoForm extends React.Component{
    constructor(props){
        super()
        this.state = { 
            addTask: ""
        }
        this.props = props;
    }   

    inputChange = e => {
        let key = e.target.name;
        let value = e.target.value;
        this.setState({[key]: value})
        localStorage.setItem(key,value);
        console.log(value,localStorage)
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



