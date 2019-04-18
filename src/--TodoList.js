import React, {Component} from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
    constructor() {
      super();
      this.state = {
        todos: []
      };
    }
  
    submitted(e) {
      e.preventDefault();
      if (this.state.currentContent.length != 0) {
        this.state.todos.push(
          <Todo
            content={this.state.currentContent}
            id={this.state.todos.length}
            status={false}
          />
        );
        this.setState({ currentContent: e.target.value });
        document.getElementById("input-form").reset();
      }
    }
  
    changed(e) {
      //alert(e.target.value)
      this.setState({ currentContent: e.target.value });
    }
  
    render() {
      for (let i = 0; i < this.state.todos.length; i++) {
        // if (this.state.todos[i].state.status) {
        //   this.state.todos.splice(i, 1);
        // }
        console.log(this.state.todos[i]);
      }
  
      return (
        <div className="column is-6 is-offset-3 box ">
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
          <form onSubmit={this.submitted.bind(this)} id="input-form" className="has-text-centered">
            <input
              className="control column is-12"
              type="text"
              placeholder="Add a task"
              onChange={this.changed.bind(this)}
            />
            <button className="control button is-link is-rounded has-text-centered">+</button>
          </form>
          <br />
          <div className="Todos">{this.state.todos}</div>
        </div>
      );
    }
  } 

export default TodoList;