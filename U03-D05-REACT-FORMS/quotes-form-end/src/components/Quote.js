import React, { Component } from 'react';


class Quote extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.quote.content !== this.props.quote.content;
  }

  render() {
    console.log('Q rendering');
    return (
      <div className="quote">
        <h2>{this.props.quote.content} </h2>
        <h3> <span>{this.props.quote.author}</span> </h3>
      </div>
    )
  }
}
export default Quote;
