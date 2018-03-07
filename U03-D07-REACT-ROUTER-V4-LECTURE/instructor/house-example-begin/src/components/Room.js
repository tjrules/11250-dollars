import React, { Component } from 'react';

class Room extends Component {
  render() {
    return (
      <div>
        <p>This is a room component</p>
        {/* match.param is added via router to props */}
        <p>This is the {this.props.match.params.rooms}.</p>
        <button onClick={
          () => {this.props.history.push('/')
          console.log(this.props.match)
          console.log(this.props.history)
        }}>Back to home</button>
      </div>
    );
  };
}

export default Room;
