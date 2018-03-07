import React, { Component } from 'react';


class Quote extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    /*
    will check 23 times, but NOT render 23 times
     add later, to bemonstrate the lifecycle
     */
    console.log('Q should update');
    return nextProps.quote.content !== this.props.quote.content;
  }

  render() {
    console.log('Q rendering');
    return (
      <div>
        <h2>{this.props.quote.content} </h2>
      </div>
    )
  }
}
export default Quote;
