import React, { Component } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoField from "./components/TodoField";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {tasks: [], currentTask: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(task) {
    var addTask = this.state.tasks.concat(task);
    this.setState({ tasks: addTask });
  }

  handleDelete(task) {
    var array = this.state.tasks;
    var deleteTask = array.splice(task, 1);
    this.setState({ tasks: array });
  }

  handleEdit(id, value) {
    var array = this.state.tasks;
    var editTask = array.splice(id, 1, value);
    this.setState({ tasks: array });
  }

  render() {
    return (
      <div className="container pt-4">
        <TodoField onSubmit={this.handleSubmit} value={this.state.currentTask}></TodoField>
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} onEdit={this.handleEdit}></TodoList>
      </div>
    )
  }
}

export default App;
