import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book'
import './App.css';

class App extends Component {

  componentDidMount(){
    //API call
    axios.get('http://myapi-profstream.herokuapp.com/api/03d6f1/books')
    .then((response) =>{
      this.setState({
        booklist: response.data
      });
    }).catch((error) => {
      console.log('axios error: ', error)
    });
  };

  constructor() {
    super();
    this.state = {
      booklist: null,
      currentBooks: null,
      showBooks: ''
    }
  }

  renderBook(book){
    this.setState({
      currentBooks: book
    })
  }

  renderBooks(){
    //open with an if statement to catch the 'null' property
    if(this.state.booklist){
      //if state isn't null (after you've made your axios call)
      return this.state.booklist.map((book, index) =>{
        //map over the array and return everything with the click listener attached
        return (
          <div key={index} className='book'  onClick={()=>this.renderBook(book)} >
            {book.title}, by {book.author}
          </div>
        )
      })
    } else {
      return <h4>Waiting</h4>
    }
  }

  postRequest(e){
    //more or less the same as making any other FETCH/AJAX/whatever
    //nothing to it, really...
   e.preventDefault(); axios.post('http://myapi-profstream.herokuapp.com/api/03d6f1/books', {
     //ATM exercise reminded me of using refs to grab form data
      title: this.refs.title.value,
      author: this.refs.author.value,
      release_date: this.refs.date.value,
      image: this.refs.image.value,
      instance_id: '03d6f1'
    }).then((response) =>{
      console.log('success! ', response)
    }).catch((error)=>{
      console.log('axios post error: ', error)
    })
  }

  trigger(){
      if(!this.state.showBooks){
        this.setState({
          showBooks: 1
        })
      } else {
        this.setState({
          showBooks: ''
        })
      }
  }

  deleteBook(id){
    axios.delete('http://myapi-profstream.herokuapp.com/api/03d6f1/books/'+id, {
      data: {id: id}
    }).then((response) =>{
      window.location.reload()
      console.log('axios delete success! ', response)
    }).catch((error) =>{
      console.log('axios delete error: ', error)
    })
  }

  editBook(e, id, title, author, image, date){
    e.preventDefault();
    axios.put('http://myapi-profstream.herokuapp.com/api/03d6f1/books/'+id, {
      data: {id: id,
              title: title,
              author: author,
              image: image,
              release_date: date}
    }).then((response) =>{
      console.log('axios update success! ', response)
    }).catch((error)=>{
      console.log('axios update error: ', error)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Books, Books, Books!</h1>
        <button onClick={()=>this.trigger()}>{this.state.showBooks? 'Hide Books':'Gimme Books'}</button>
        {/* triggers true/false, which will render the list of books based on whether or not it's set to true or false
        Thanks to Sabs for explaining this. Basically the same
        as the stopwatch stuff*/}
        {this.state.showBooks&&
        this.renderBooks()
        }
        <Book book={this.state.currentBooks} deleteBook={this.deleteBook} editBook={this.editBook} />
        <h2>Construct a book</h2>
        {/* pieced together this solution for the bonus using a couple of different sites:
        -axios docs to actually write the Post request syntax,
        -a react article on how to construct and submit a form
        -and another article on how react handles form submissions */}
        <form onSubmit={(e)=>this.postRequest(e)}>
          <label>Title:
            <input ref='title' type='text' placeholder='Title' />
          </label>
          <label>Author:
            <input ref='author' type='text' placeholder='Author' />
          </label>
          <label>Image:
            <input ref='image' type='text' placeholder='Image Link' />
          </label>
          <label>Release Date:
            <input ref='date' type='text' placeholder='Release Date' />
          </label>
          <input type='submit' value='Create Book' />
        </form>
      </div>
    );
  }
}

export default App;
