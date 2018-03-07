import React, { Component } from 'react';


class Quote extends Component {
  render() {
    return (
      <div className="my-quote">
        <h3>{this.props.quote.content}</h3>
        <span className="author">{this.props.quote.author}</span>
        <span className="genre">{this.props.quote.genre_type}</span>
      </div>
    );
  };
}

export default Quote;