import React, { Component } from 'react';

import Quote from './partials/Quote';
import Loading from './partials/Loading';

class QuoteList extends Component {
  constructor() {
    super();
    // state
    this.state = {
      quotesListData: null,
      quotesListDataReceived: false,
    }
  }

  componentDidMount() {
    fetch('https://ada-api.herokuapp.com/api/quotes')
      .then((res) => {
        return res.json();
      }).then((jsonRes) => {
        this.setState({
          quotesListData: jsonRes.quotesData,
          quotesListDataReceived: true,
        })
      })
  }

  renderQuoteList() {
    if (this.state.quotesListDataReceived) {
      return this.state.quotesListData.map((quote) => {
        return <Quote quote={quote} key={quote.id} />
      });
    } else return <Loading />
  }

  render() {
    return (
      <div className="quotelist">
        {this.renderQuoteList()}
      </div>
    );
  };
}

export default QuoteList;