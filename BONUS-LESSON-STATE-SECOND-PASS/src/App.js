import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropExample from './PropExample'

class App extends Component {

  constructor() {
    super();
    this.state = {
      example: 'bad',
      passedState: 'bad',
      input: '',
      password: '',
      name: ''
    }
    this.changeMyState = this.changeMyState.bind(this)
    this.passThisDown = this.passThisDown.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  changeMyState() {
    this.setState({
      example: 'examples actually are bad'
    })
  }

  passThisDown() {
    this.setState({
      example: 'possibly good'
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.changeMyState}>Change my state!</button>
        </header>
        <PropExample donuts={this.state.passedState} stateFunction={this.passThisDown} handleInputChange={this.handleInputChange} />
        <h2> {this.state.example}</h2>
        <h3>{this.state.input}</h3>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.example === 'bad' ? <h1>'Don't be such a pessimist!'</h1> : <h1>'I like your outlook on life'</h1>}
      </div>
    );
  }
}

export default App;
