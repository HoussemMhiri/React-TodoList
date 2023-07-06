import React, { Component } from "react";
import "./App.css";
import AddTasks from "./component/AddTasks";
import { Task } from "./component/Task";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrTasks: [
        {
          id: Math.random(),
          task: "learn Html",
          done: false,
        },
        {
          id: Math.random(),
          task: "learn Css",
          done: false,
        },
        {
          id: Math.random(),
          task: "learn Js",
          done: false,
        },
      ],
    };
  }

  taskCheck = (id) => {
    this.setState({
      arrTasks: this.state.arrTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    });
  };

  taskTrash = (id) => {
    this.setState({
      arrTasks: this.state.arrTasks.filter((el) => el.id !== id),
    });
  };

  addTask = (tasks) => {
    const newTask = { id: Math.random(), task: tasks, done: false };
    this.setState({ arrTasks: [...this.state.arrTasks, newTask] });
  };

  render() {
    return (
      <div className="App">
        <AddTasks addTask={this.addTask} />
        <Task
          data={this.state.arrTasks}
          check={this.taskCheck}
          trash={this.taskTrash}
        />
      </div>
    );
  }
}
