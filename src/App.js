import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './index.scss';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';
import Login from './login.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    //this.editTask = this.editTask.bind(this);
    this.state = {
      tasks: [{
        name: "Learn Angular",
        completed: false
      },
      {
        name: "Learn Node.js",
        completed: false,
        editing: false
      },
      {
        name: "Learn Express",
        completed: false,
        editing: false
      }],
      currentTask: ''
    }
  }
  deleteTask(index) {
    console.log(index)

    let tasks = this.state.tasks;
    tasks.splice(index, 1);

    this.setState({
      tasks
    })

  }

  addTask(evt) {
    evt.preventDefault();
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
      name: currentTask,
      completed: false
    })
    
    this.setState({
      tasks,
      currentTask: ''
    })


  }
  updateTask(newValue) {
    this.setState({
      currentTask: newValue.target.value
    })
  }


  changeStatus(index) {
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    this.setState({
      tasks: tasks
    })
  }
  render() {
      
      
    return (
      
      
      <div id="container">
        <div className="column is-6 is-offset-3 box ">
        <Login />
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  ToDoList
                </h1>
                <h2 className="subtitle">
                  Write your task...
                </h2>
              </div>
            </div>
          </section>
          <section>
            <TodoForm
              currentTask={this.state.currentTask}
              updateTask={this.updateTask}
              addTask={this.addTask}
            />
            <ul>
              {
                this.state.tasks.map((task, index) => {
                  return <TodoItem
                    key={task.name}
                    clickHandler={this.changeStatus}
                    index={index}
                    deleteTask={this.deleteTask}
                    details={task} />
                })
              }

            </ul>
          </section>
        </div>
      </div>
     
    )
  }
}


export default App;
