

import React, { Component } from 'react';

import { render } from 'react-dom';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      task: {
        title: 'My First component',
        done: true
      }
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const task = this.state.task;
    task.done = !task.done;
    this.setState({
      task
    });
    alert(this.state.task.done);
  }

  render() {
    return (
      <div>
        <h3>{this.state.task.title}</h3>
        <h3>{this.state.task.done.toString()}</h3>
        <button onClick={this.handleClick}>
          Click
                </button>
      </div>
    )
  }

}

export default App;