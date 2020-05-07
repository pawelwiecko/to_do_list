import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  counter = 0;
  state = {
    tasks: [
     
    ]
  }

  deletedTask = (id) => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    let tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
}

addTask = (text, date, important) => {
  console.log("dodany obiekt");
  const task = {
    id: this.counter,
    text,
    date,
    important,
    active: true,
    finishDate: null
  }
  this.counter++
  console.log(task, this.counter);

  this.setState(prevState => ({
    tasks: [...prevState.tasks, task]
  }))
  
  return true
}

  render() {
    return (
      <div className="App">
        <div className="box">
        <h1>TO DO LIST</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete= {this.deletedTask} change={this.changeTaskStatus}/>
        </div>
      </div>
    );
  }
}

export default App;
