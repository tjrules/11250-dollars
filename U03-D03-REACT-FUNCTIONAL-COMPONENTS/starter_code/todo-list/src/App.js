import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default App;
