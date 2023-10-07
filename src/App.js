import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      const newTask = {
        text: this.state.newTask,
        completed: false,
      };
      this.setState({
        tasks: [...this.state.tasks, newTask],
        newTask: '',
      });
    }
  };

  toggleTaskComplete = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    this.setState({ tasks: updatedTasks });
  };

  deleteTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div className="App">
        <h1>To-Do List App</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Add a new task"
            value={this.state.newTask}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTask}>Add</button>
        </div>
        <ul className="task-list">
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.toggleTaskComplete(index)}
              />
              <span className={task.completed ? 'completed' : ''}>
                {task.text}
              </span>
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
