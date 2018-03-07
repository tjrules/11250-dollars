import React, { Component } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';
import data from './data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentBook: {},
      books: data
    };
  }

  render() {
    return (
      <div>
        <BookDetail book={this.state.currentBook} />
      </div>
    );
  }
}

export default App;
