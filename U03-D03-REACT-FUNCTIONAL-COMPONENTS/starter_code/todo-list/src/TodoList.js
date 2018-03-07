import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

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

export default TodoList;
