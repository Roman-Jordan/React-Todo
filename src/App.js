import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super();
    this.state = {
      todoList 
    }
  }
  addTask = task => {
    this.setState({
      todoList:[
        ...this.state.todoList,
        {task:task,id:Date.now(),completed:false}
      ]
    });
  }

  taskComplete = id => {
    this.setState({
      todoList: this.state.todoList.map(task =>(
        task.id === id ? {...task, completed :!task.completed} : task
      ))
    })
  }
  clearCompleted = e =>{
    e.preventDefault();
    console.log(this.state)
    this.setState({
        todoList : this.state.todoList.filter(task =>!task.completed)
  })
}
  //https://codesandbox.io/s/8yoxox4xx0
  render() {
    return (
      <div className="TodoComponent">
        <div className="todoHeader">
          <h2>Todo List: MVP</h2>
          <TodoList taskStatus={this.taskComplete} list={this.state.todoList} />
          <ToDoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        </div>
      </div>
    );
  }
}

