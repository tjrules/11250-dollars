import React, {Component} from 'react';

class TodoListItem extends Component {
  render() {
    return (
      <li className="TodoListItem">
        <span>{this.props.text}</span>
        <span>{this.props.dateAdded.toString()}</span>
      </li>
    )
  }
}

export default TodoListItem;
