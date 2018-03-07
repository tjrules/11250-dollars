# Working with lists and Functional Components

### Setup / Refresher on State

Let's consider the following example of a Todo list component that receives an array of todo objects as a prop and renders a list of todo list item components.

```javascript
// src/TodoList.js

class TodoList extends Component {
  renderTodos() {
    return (
      this.props.todos.map((todo) => {
        return (
          <TodoListItem
            text={todo.text}
            dateAdded={todo.dateAdded}
            key={todo.dateAdded.toString()} />
        );
      })
    );
  }

  render() {
    return (
      <ul className="TodoList">
        {this.renderTodos()}
      </ul>
    )
  }
}
```

```javascript
// src/TodoListItem.js

class TodoListItem extends Component {
  render() {
    return (
      <li>
        <span>{this.props.text}</span>
        <span>{this.props.dateAdded}</span>
      </li>
    )
  }
}
```

Here we have two component classes - a `TodoList` class and a `TodoListItem` class. The list is responsible for keeping track of the application data, i.e., the todo list array. The item is responsible for rendering it's todo information.

### The `key` property

When we are rendering collections of React components, it is very important to provide each item in the collection - each instance of the component class - with a uniq key that identifies that component. Usually, the data that we will be working with will originate from an HTTP request and come to our front end application in the form of JSON data. As a result, we will most likely have an `id` (from the database table).

Because our todo objects in our todo array don't have `id`s, we are going to use the `dateAdded` property as the key. This will serve as good key because it is uniq to each todo object in our `todos` array.

It is bad practice to use the array index of an item as its key. This because if we were to ever reorder our array and change where elements are, they indexes of the keys of the component would not change with the data.

#### Independent Practice

Now modify our TodoList component and add the ability to create a new todo item and add it to the list.

1. Add a `form` to your `TodoList` class. The form should have one prop - an `onSubmit` prop which is set to `this.handleSubmit`.

2. Add a text input inside of your form. This input should have two props - a `value` prop which should equal `this.state.newTodoItem` and a `onChange` prop which should be equal to `this.handleChange`.

3. Add a `constructor` function to your TodoList component. This should call `super` (with props). It should also set the initial state of the component. We want this state object to have two properties - a `newTodoItem` which will be start out as an empty string, and a `todos` which will be an array of todo objects. We will take this opportunity to set the initial state value `todos` to the todo array passed in as a prop to each instance of `TodoList`.

4. Implement the `handleChange` method, which should take the value from the events target and set it in the state (use `setState`).

5. Implement the `handleSubmit` method, which should create a new todo object with a text property (`this.state.newTodoItem`) and dateAdded property (`new Date()`) and push it into the `todos` array stored in the state (use `setState`). This should also set the `newTodoItem` value in the state to an empty string.

6. Change your `renderTodos` method to map over the `todos` array in the state, rather than the array from the props.

### Functional Components

Great! We can create and add a todo to the list by entering some text into the input. It makes sense that our `TodoList` component has state, because it is responsible for managing changes to the todos array. But for our components that don't utilize state, React provides an alternative way of creating the component classes. We call this alternative "Functional Components".

Functional components are useful when a component can function completely with only props and no state. Our `TodoList` needs state, because without it, it would have no way to keeping the list up to date. However our `TodoListItem`s don't need state at all, because a TodoListItem instance's data is not going to change after it's created (in our example).

Let's convert our `TodoListItem` to a functional component.

```javascript
// src/TodoListItem.js
import React from 'react';

const TodoListItem = ({text, dateAdded}) => {
  return (
    <li className="TodoListItem">
      <span>{text}</span>
      <span>{dateAdded.toString()}</span>
    </li>
  )
}

export default TodoListItem;
```

Things to note:
- We are no longer defining an ES6 class, but instead just a function.
- When the function is called, it just returns some JSX (react elements).
- The argument that the function is called with is the props of that componet. We are using [ES6 destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to make the props available by their names in the function.

### Further Reading

- [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html)
- [Functional and Class Components](https://facebook.github.io/react/docs/components-and-props.html)
- [Handling Events](https://facebook.github.io/react/docs/handling-events.html)
