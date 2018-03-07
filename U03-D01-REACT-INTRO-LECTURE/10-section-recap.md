# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Review


## Catch your breath!

It is time to stop for a moment and review all of the topics that we've discussed so far. React may seem very confusing at first with all of the jargon, so let's break everything down:

### Learning Objectives that we've covered so far

* **React** is?
  * A framework created by developers at Facebook. It is aimed at being the 'view' of your Javascript application. It focuses on creating a component-based architecture.
* A **component** is?
  * An independent, reusable piece of your user interface.

* **Nested Component**:
- Components called inside another component (like calling Comment components within a blog Post). Here is a diagram of the flow of information for a Comment component nested inside (called by!) a Post component:

![nested components chart](https://ga-instruction.s3.amazonaws.com/json/REACT/assets/unit1/nested_components_chart.jpg)

* The **Virtual DOM** is?
  * A virtual representation, or abstraction, of the DOM. React doesn't apply your changes to the DOM directly. While it creates and manipulates elements, it does so through custom React objects. The results of that manipulation are then rendered to the DOM. This prevents you from having to focus on constantly changing the state of a `<div>` tag.
  * Your virtual DOM is compared to the regular DOM, and only the element specified in `ReactDOM.render()` on the page updates.
* **JSX** is?
  * A standard that React uses to represent HTML elements as XML tags. It looks like a template language but is much more powerful. Each JSX tag represents a React Element, and a React Class is composed of multiple elements. You express your visual user interface through nested JSX tags that can render additional components. JSX is not required for React, but it is incredibly useful.
  * JSX can look just like HTML, with `<h1>Hello world!</h1>`, but it can also get far more complicated.
* **Props** are?
  * Arguments passed into a component, as though they were arguments to a function. The component can then use this data to render something or pass the data on to another component. For example, your `App.js` could have

```js
  ReactDOM.render(
  <Hello name={"Nick"} />,
  document.getElementById('root')
)
```

And your `Hello.js` component could have

```js
class Hello extends Component {
  render () {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
}
```
