import React, { Component } from 'react';
import Quote from './Quote';

class QuotesList extends Component {


  render() {
    console.log('QL rendering');
    return (
      <div style={{ backgroundColor: this.props.bgColor }}>
        <button id='color-change'onClick={this.props.changeBgColor}> {this.props.bgColor} Change Color !</button>
        { this.props.data.map( quote => {
          return <Quote quote={quote} key={quote.id} />
        })}
      </div>
    )
  }
}

export default QuotesList;
