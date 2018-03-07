import React, { Component } from 'react';

import Loading from './partials/Loading';

class SingleQuote extends Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      quote: null,
      quoteDataReceived: false,
    }
  }

  componentDidMount() {
    fetch(`https://ada-api.herokuapp.com/api/quotes/1`)
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          quote: jsonRes.quote,
          quoteDataReceived: true,
        });
      });
  }

  renderQuote() {
    if (this.state.quoteDataReceived) {
      return (
        <div className="my-quote">
          <h3>{this.state.quote.content}</h3>
          <span className="author">{this.state.quote.author}</span>
          <span className="genre">{this.state.quote.genre_type}</span>
        </div>
      );
    } else return <Loading />;
  }


  render() {
    return (
      <div className="single-quote">
        {this.renderQuote()}
      </div>
    );
  };
}

export default SingleQuote;