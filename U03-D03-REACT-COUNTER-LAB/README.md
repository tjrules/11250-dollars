# React Counter Lab

#### Setup

**Outside** of this directory:

```
create-react-app counter
cd counter
npm start
```

#### Requirements

You are going to create a simple counter with the following features:

1. A display of the `total`, which is initially `0`, and changes as the user interacts with the app.
2. A `+1` button that adds 1 to the total.
3. A `+5` button that adds 5 to the total.
4. A `-1` button that subtracts 1 from the total.
5. A `0` button which resets the total to `0`.

#### Bonus

1. Try to refactor your component so the `setState` method is only called in one function.

2. Instead of having buttons that have pre-defined number and operations, change your component to have an input for a number and a set of `+` and `-` buttons. When the `+` or `-` button is clicked, the current value that is in the input should either be added or subtracted from the total.
