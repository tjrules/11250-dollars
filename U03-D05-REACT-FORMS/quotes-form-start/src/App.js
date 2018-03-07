import React, { Component } from 'react';
import QuotesList from './components/QuotesList';
import axios from 'axios';
import logo from './millie.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      bgColor: '#FFFFFF'
    }
    this.changeBgColor = this.changeBgColor.bind(this);
  }

  /* triggered before rendering, but will be overrritten by "didMount" */
  componentWillMount() {
    console.log('APP will mount');
    this.setState({
      bgColor: 'red',
    })
  }

  /*
  is rendered last right before rendering
  hence we should do last state manipulations here
  */
  componentDidMount() {
    console.log('APP did mount');
    axios('https://dresselhaus-quotes-api.herokuapp.com/api/quotes')
      .then(res => {
        this.setState({
          apiData: res.data.quotesData,
          bgColor: '#f3d8de',
        })
      })
  }
  changeBgColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({
      bgColor: color,
    })
  }

  render() {
    console.log('APP rendering', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Welcome to Dresselhaus Quotes </h2>
        </div>
        <QuotesList
            hello="Hello, "
            data={this.state.apiData}
            bgColor={this.state.bgColor}
            changeBgColor={this.changeBgColor} />
      </div>
    );
  }
}

export default App;
