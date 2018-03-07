import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

export default BookList;
