import React, { Component } from 'react';

class PropExample extends Component {
  constructor(props) {
    super(props);
    console.log('props are in constructor:', props);
    this.state = {
      stuff: props
    }
  }
  render() {
    // console.log('state in render', this.state)
    return (
      <div className="example">
        <button onClick={this.props.stateFunction}>Change the parent state!</button>
        <h1>Examples are {this.props.donuts}</h1> 
        <input type="text" name="password" onChange={this.props.handleInputChange} placeholder="password?" />
        <input type="text" name="name" placeholder="write your name"  onChange={this.props.handleInputChange}/>
      </div>

    )
  }
}

export default PropExample
