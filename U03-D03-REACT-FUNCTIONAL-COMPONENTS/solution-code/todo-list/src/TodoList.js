import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoItem: '',
      todos: this.props.todos
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({newTodoItem: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let newTodo = {text: this.state.newTodoItem, dateAdded: new Date()}
    let todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos: todos, newTodoItem: ''});
  }

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
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label>
            Add a todo item!
            <input type="text" value={this.state.newTodoItem} onChange={this.handleChange} />
          </label>
        </form>
        {this.renderTodos()}
      </ul>
    )
  }
}

export default TodoList;
