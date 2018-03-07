import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      nickname: '',
      loggedInName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: '/people',
      data: {
        username: this.state.username,
        nickname: this.state.nickname
      }
    })
    .then( person => {
      console.log('got this back', person.data);
      this.setState({
        loggedInName: person.data.nickname
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='form'>
      {(this.state.loggedInName) ? <h1>Welcome, {this.state.loggedInName}</h1> : <h1>Please Log In</h1>}
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} name='username' placeholder='write your name here' />
        <input type='text' onChange={this.handleChange} name='nickname' placeholder='write your nickname here' />
        <input type='submit' value='get em done' />
      </form>
      </div>
      )
  }
}

export default Form;
