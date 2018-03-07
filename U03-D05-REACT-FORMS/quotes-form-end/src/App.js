import React, { Component } from 'react';
import axios from 'axios';
import logo from './millie.png';
import './App.css';
import AddQuoteForm from './components/AddQuoteForm';
import QuotesList from './components/QuotesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      bgColor: '#FFFFFF',
      inputContentValue: '',
      inputAuthorValue: '',
      inputGenreValue: '',
    }
    this.changeBgColor = this.changeBgColor.bind(this);

    this.handleInputContentChange = this.handleInputContentChange.bind(this);
    this.handleInputAuthorChange = this.handleInputAuthorChange.bind(this);
    this.handleInputGenreChange = this.handleInputGenreChange.bind(this);
    this.handleQuoteSubmit = this.handleQuoteSubmit.bind(this);
  }

  componentDidMount() {
    /**
     * The fetching we do here in componentDidMount will
     * only fetch when the component initially loads.
     */
    axios('https://ada-api.herokuapp.com/api/quotes')
      .then(res => {
        this.setState(prevState => {
          return {
            quotes: res.data.quotesData,
          }
        });
      });
  }

/* keep it just for fun :) */
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

/*
It's the best practice to use controlled input fields.
that's what we are using here.
The other way would be to use `ref`s - uncontrolled input fields.
Check it out.
*/
  handleInputContentChange(event) {
    this.setState({
      inputContentValue: event.target.value
    });
  }

  handleInputAuthorChange(event) {
    this.setState({
      inputAuthorValue: event.target.value
    });
  }

  handleInputGenreChange(event) {
    this.setState({
      inputGenreValue: event.target.value
    });
  }

  handleQuoteSubmit(event) {
    event.preventDefault();
    event.target.content = '';

    axios.post('https://ada-api.herokuapp.com/api/quotes', {
      content: this.state.inputContentValue,
      author: this.state.inputAuthorValue,
      genre_type: this.state.inputGenreValue
    })
    .then(res => {
      console.log(res.data.quote);
      if (res.data.quote.id !== undefined) {
        const newQuote = {
          content: res.data.quote.content,
          author: res.data.quote.author,
          genre_type: res.data.quote.genre_type,
        }
        /*  just what we discussed yesterday how to set state as an aray */
        this.setState((prevState) => {
          return {
            quotes: prevState.quotes.concat(newQuote),
          }
        })
      }
    }).catch(err => console.log(err));
  }

  render() {
    console.log('APP rendering', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quotes App... continued 😀 </h2>
        </div>
        <AddQuoteForm
          handleQuoteSubmit={this.handleQuoteSubmit}
          handleInputContentChange={this.handleInputContentChange}
          handleInputAuthorChange={this.handleInputAuthorChange}
          handleInputGenreChange={this.handleInputGenreChange}
          inputContentValue={this.state.inputContentValue}
          inputAuthorValue={this.state.inputAuthorValue}
          inputGenreValue={this.state.inputGenreValue}
        />
        <QuotesList
          data={this.state.quotes}
          bgColor={this.state.bgColor}
          changeBgColor={this.changeBgColor}
          />
      </div>
    );
  }
}

export default App;
