# Let's work with updating state again!

In the src folder of this lab, you'll find a pre-built React app with 3 components: `App.js`, `BookList.js`, and `BookDetails.js`. Your job is to write the methods that will pass state up and down the chain of components and render a list of books, as well as allow a user to click on a book for more information about it.

1. In `App.js`
  * Create a `selectBook` method that takes in a parameter, `book`, and updates `this.state.currentBook` to be equal to the book object passed in when the function is called.

  * Render the `BookList` component under the `BookDetails` component. Pass down a prop called `books` which should be equal to `this.state.books`, and another prop called `selectBook` which should be equal to the `selectBook` function.

2. In BookList.js

  * Create a function called renderList. This function should map over the list of books passed in as props and return an array of `li`s, each displaying the only title of the book it represents.

  * You will also need to add an `onClick` listener to each `li`. When the list item is clicked, we want the `currentBook` to update in the `App` component. To do this, the `onClick` callback needs to call make a call to `this.props.selectBook` and pass in the `li`s book as an argument. 
  > Important!! Don't forget you're updating state in a different component than what you're clicking on here! 
