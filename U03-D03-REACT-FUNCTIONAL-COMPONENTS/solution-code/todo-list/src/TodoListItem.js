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
