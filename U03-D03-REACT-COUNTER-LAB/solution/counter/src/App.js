import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {total: 0};
    this.add1 = this.add1.bind(this);
    this.add5 = this.add5.bind(this);
    this.sub1 = this.sub1.bind(this);
    this.zero = this.zero.bind(this);
  }

  add1() {
    this.setState({total: this.state.total + 1});
  }
  
  add5() {
    this.setState({total: this.state.total + 5});
  }
  
  sub1() {
    this.setState({total: this.state.total - 1});
  }
  
  zero() {
    this.setState({total: 0});
  }
 
  render() {
    return (
      <div>
        <h1>{this.state.total}</h1>
        <button onClick={this.add1}>+1</button>
        <button onClick={this.add5}>+5</button>
        <button onClick={this.sub1}>-1</button>
        <button onClick={this.zero}>0</button>
      </div>
    );
  }
}

export default Counter;
