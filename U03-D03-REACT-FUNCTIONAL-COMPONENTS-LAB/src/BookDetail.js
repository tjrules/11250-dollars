import React from 'react';

const BookDetail = (props) => {
  return (
    <div>
      <h3>Details for: {props.title}</h3>
      <p>Description: {props.description}</p>
      <p>Pages: {props.pages}</p>
    </div>
  );
}

export default BookDetail;
