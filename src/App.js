import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
//import ToDo from './components/TodoComponents/Todo';
import ToDoForm from './components/TodoComponents/TodoForm';
const todo = [
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

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 
    state = {
      todoList : todo,
      todoItem : {
        task: '',
        id : '',
        completed: ''
      }
    }
    

  listChange = e =>{
    let target = e.target.name;
    let value = e.target.value;
    this.setState({
      todoItem: {
        ...this.state.todoItem,
        [target]:value,
        id:Date.now(),
        completed:false
      }
    })
  }

  listUpdate = e =>{
    e.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.todoItem],
      todoItem:{
        task:'',
        id:'',
        completed:''
      }
    })
    console.log(this.state.todoItem)
  }

  todoClick = event =>{
  
  }
  
  render() {
    return (
      <div className="TodoComponent">
        <h2>Todo List: MVP</h2>
        {this.state.todoList.map((todo,i) =>{
          return (
            <TodoList onClick={this.todoClick} key={i} item={todo}/>
          )
        })}
        <ToDoForm updateList={this.listUpdate} onChange={this.listChange} task={this.state.todoItem.task}/>
      </div>
    );
  }
}

export default App;
