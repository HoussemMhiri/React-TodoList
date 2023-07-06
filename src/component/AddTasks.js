import "./Tasks.css";

import React, { Component } from "react";

export default class AddTasks extends Component {
  state = {
    task: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <header>
        <h1>My Tasks</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            onChange={(e) => this.setState({ task: e.target.value })}
            type="text"
            name=""
            value={this.state.task}
            id=""
          />
          <button type="submit">
            <i class="fas fa-plus-square"></i>
          </button>
        </form>
      </header>
    );
  }
}
