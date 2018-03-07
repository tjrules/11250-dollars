import React from 'react';

const Book = (props, refs) =>{
  if (props.book){
    return(
      <div className='book'>
        <h4>Details for {props.book.title}:</h4>
        <p>Author: {props.book.author}</p>
        <p> Released on: {props.book.release_date}</p>
        <img src={props.book.image} />
        <button onClick={(id)=>props.deleteBook(props.book.id)}>Delete this Book?</button>
        <form onSubmit={(e, id, title, author, image, date) =>props.editBook(e, props.book.id, refs.edit_title, refs.edit_author, refs.edit_image, refs.edit_date)}>
          <label>Title</label>
          <input type='text' ref='edit_title' defaultValue={props.book.title}/>
          <label>Author</label>
          <input type='text' ref='edit_author' defaultValue={props.book.author}/>
          <label>Image</label>
          <input type='text' ref='edit_image' defaultValue={props.book.image}/>
          <label>Release Date</label>
          <input type='text' ref='edit_date' defaultValue={props.book.release_date}/>
          <input type='submit' />
        </form>
      </div>
    )
  } else {
    return <h4>Pick A book</h4>
  }
}

export default Book;
