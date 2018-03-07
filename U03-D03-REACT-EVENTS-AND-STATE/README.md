# Managing state and handling events in React

## Learning Objectives
* Understand what "state" means in React
* Set an initial state and then play around with it
* Understand what an "event" is in React

Up until now, our react apps have been pretty boring because we haven't allowed for any user interaction. Let's step up our game!

Before we begin with this lesson, you are going to want to
```
create-react-app state-lesson
cd state-lesson
npm start
```
so you have an app to play around in. The examples that go along with this lesson are short enough for you to type out as we go.

## Events in react

If we want to respond to some user action (clicking on buttons, typing into inputs), we can turn to React's built-in event handling system.

#### onClick

The first event we will learn how to handle is the click event. Given a React component class `LightSwitch` that renders a single button, we can add a click handler to the button by creating an `onClick` property on that button.

```javascript
class LightSwitch extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { console.log('switched!'); }}>
          Click me!
        </button>
      </div>
    );
  }
}
```

> Note: This `onClick` React property is *not* the same as the same as the HTML5 `onclick` attribute.

We have supplied an anonymous function as our button's `onClick` handler, but it is better practice to pass in a method defined in the class.

```javascript
class LightSwitch extends Component {
  handleClick() {
    console.log('switched!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}
```

#### onChange

For events the can occur from user interaction with form inputs (namely text inputs, textareas, and selects), we can turn to the `onChange` event. While callbacks provided to `onClick` are called when the element it clicked, `onChange` callbacks are invoked whenever the value of the input has changed.

Consider the following component.

```javascript
class NameForm extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <form>
        <label>
          Name
          <input onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}
```

What will be logged to the console if the user enters 'Morty Smith' into the name input?

### Independent practice

Add a [select input] for prefix and a textarea for bio. Give them their own handler methods that just console.log for now.

## State: Keeping track of user input

Ok, great, we can handle events on the DOM. But what good does that do us if the only way we respond to an event is logging to the console? When a user interacts with the UI of an interactive application, it often results in a change to the raw information (the data) that represents the apps current graphical representation.

To Illustrate this point, let's think about a browser based Javascript game of tic tac toe who's implementation utilizes a constant `board` -

```javascript
const board = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined]
];
```

A two dimensional array representing the 3 x 3 matrix of a tic tac toe board. If we think of the arrays in board getting filled with `X`s and `O`s as the game is played, we can say that the graphical representation of the game at any point in time is just a rendering of this `board` data structure. In this sense, the `board` constant represents the current state of our game app.

In React, we can utilize a special `state` object in our components to help us keep track of all of the data in our applications. The `state` object gives us a convenient procedure for accessing application state values and updating them as users interact with the UI.

#### Initial state values

To set the initial values in our state object, we will have to define a `constructor` method in our component class. The constructor method is called when an instance of the component class is instantiated.

```javascript
class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = { lights: 'on' };
  }

  handleClick(event) {
    event.preventDefault();
    console.log('switched!');
  }

  render() {
    return (
      <div>
        <h1>{`The lights are ${this.state.lights}!`}</h1>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}
```

The `super` method refers to the `constructor` method of the class that our component class is inheriting from (which is just `React.Component`). This sets up all of the default behavior that we expect our components to have, like the ability to render and have accessible props.

The second part of the constructor method is where we set the initial `state` for our component. Usually, because the `props` that a component is instantiated with represent the initial values for that component, it is not uncommon to assign initial state values based on props in the `constructor` method of a component. i.e.,

```javascript
constructor(props) {
  super(props)
  this.state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName
  }
}
```

In the above example, we are setting the initial values of `firstName` and `lastName` from the props, however, the state is what we care about moving forward, because it will reflect any UI events that change those values.

#### Mutating state

Now that we have a place to store application data, we need a way to change that data based on user interaction. We already know how to hook into UI events with react event listeners and event handler callbacks, so we can just do our state mutations in there based.

For our example with the `LightSwitch` component class, we want to toggle the `lights` value in state between `on` and `off` when the button is clicked. To do this, we will use the `setState` method that is available to all React components.

```javascript
class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = { lights: 'on' };
  }

  handleClick() {
    if (this.state.lights === 'on') {
      this.setState({lights: 'off'});
    } else {
      this.setState({lights: 'on'});
    }
  }

  render() {
    return (
      <div>
        <h1>{`The lights are ${this.state.lights}!`}</h1>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}
```

> NOTE: You should **never mutate the state object directly!!!!** Always use the `setState` method. [From React...](https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly)

One thing you will notice when we run this code and click the button is that we get an error `Cannot read property 'state' of null`. Remember, `this` refers to the execution context of a function *when it is called*. In the case of our component, that context is the button itself. We have to make sure that we assign the meaning of `this` to be the component itself, so it behaves as we expect when it is called. There are many ways to achieve this, but we are going to adopt a style that is considered best practice according to the React documentation.

```javascript
class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = { lights: 'on' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.lights === 'on') {
      this.setState({lights: 'off'});
    } else {
      this.setState({lights: 'on'});
    }
  }

  render() {
    return (
      <div>
        <h1>{`The lights are ${this.state.lights}!`}</h1>
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}
```

### Independent Practice

1. Read the entire section of the React docs about [using state correctly](https://facebook.github.io/react/docs/state-and-lifecycle.html#using-state-correctly).

2. Using the following `NameForm` component class as a starting place, implement the state mutation functionality to display the proper information. *Hint: You will need to figure out a way to have a general-purpose `handleChange` method*. [Check this out](https://facebook.github.io/react/docs/forms.html#handling-multiple-inputs).

```javascript
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(event) {
    event.preventDefault();
    // your code here
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Prefix
            <select name="prefix" value={this.state.prefix} onChange={this.handleChange}>
              <option></option>
              <option value="Mrs">Mrs</option>
              <option value="Mr">Mr</option>
              <option value="Ms">Ms</option>
            </select>
          </label>
          <label>
            Name
            <input name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Bio
            <textarea name="bio" value={this.state.bio} onChange={this.handleChange} />
          </label>
        </form>
        <h1>{`${this.state.prefix}. ${this.state.name}`}</h1>
        <p>
          {this.state.bio}
        </p>
      </div>
    );
  }
}
```

## Lab

[Do it!](https://git.generalassemb.ly/wdi-nyc-narwhal/react-counter-lab)
