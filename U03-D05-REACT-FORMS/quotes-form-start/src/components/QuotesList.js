import React, { Component } from 'react';
import Quote from './Quote';

class QuotesList extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('QL will receive props');
  }

  componentWillMount() {
    console.log('QL will mount');
    /* stop from */
    return false;
  }

  /* is triggered right after the state change */
  componentWillUpdate() {
    console.log('QL will update');
  }
  /*
  triggered right after rendering
  use case: posting to database after the form submisison
  */
  componentDidUpdate() {
    console.log('QL did update');
  }

  render() {
    console.log('QL rendering');
    return (
      <div style={{ backgroundColor: this.props.bgColor }}>
        {this.props.hello} {this.props.bgColor} color!
        <button onClick={this.props.changeBgColor}>
          Change Color !</button>
        { this.props.data.map(quote => {
          return <Quote quote={quote} key={quote.id}/>
        })}
      </div>
    )
  }
}

export default QuotesList;
