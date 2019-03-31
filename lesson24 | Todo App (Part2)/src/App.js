/*
  State Component
*/
import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos : [
      {id: 1, content: "Buy some milk"},
      {id: 2, content: "Play mario kart"}
    ]
  }
  handleDelete = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
      }
    )
    this.setState({
      todos : todos
    });
  }
  handleAdd = (content) => {
    content.id = Math.random();
    let todos = [...this.state.todos, content]
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deletetodo={this.handleDelete}/>
        <AddTodo addtodo={this.handleAdd} />
      </div>
    );
  }
}

export default App;
