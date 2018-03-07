# [React Router v4](https://reacttraining.com/react-router)

## Learning Objectives

- Use `yarn` to add a third party node module
- Install and use React Router to manage routing in a React app
  - Use React Router's navigational components: `Router`, `Route`, `Link`, and `Redirect`
- Contrast React Router's approach to routing with routing we have seen in express

## Set-up

We are going to use `yarn` today. It is an alternative tool to `npm` that works very much the same way. Yarn became very popular because it improved on `npm` in security and speed. `npm` has closed the gap so currently there is no significant difference but `create-react-app` will default to `yarn` if it is available.

We can install `yarn` globally with `npm i -g yarn`

### From the command line
1. Create a new React App called `react-router-practice` from the command line
2. `cd` into `react-router-practice/src/`
3. Remove `logo.svg`, `index.css`, and `App.test.js`
4. Create a components directory
5. Install `react-router-dom`
6. Open `react-router-practice` in your text-editor of choice

```shell
$ create-react-app react-router-practice
# Bunch of installing
$ yarn add react-router-dom
$ cd react-router-practice/src
$ rm logo.svg index.css App.test.js
$ atom ..
```

### In your text editor
1. Remove the import of `index.css` from `index.js`
2. Remove the import of `logo.svg` from `src/App.js` and empty the `App` components render method
3. Add anything to the the render method of `App`

In `src/App.js`:

```javascript
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <h1>Hello, React Router!</h1>
    )
  }
}

export default App
```

## Routing Components

### Router

Import `browserRouter` from `react-router-dom` and alias it to `Router`. Make `Router` the top level component of the `App` component's render function.

In `src/App.js`:

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <h1>Hello, React Router!</h1>
      </Router>
    )
  }
}

export default App
```
Having the `Router` component at the top level will provide routing functionality to other routing components we bring in from `react-router-dom`

At this point, we aren't expecting any new behavior but we should check to make sure there're no errors.

### Link

Next we'll bring in the `Link` component. These work a lot like `a` tags:

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/about'>
                <li>About</li>
              </Link>
            </ul>
          </nav>
          <h1>Hello, React Router!</h1>
        </div>
      </Router>
    )
  }
}

export default App
```

Note the `div` that contains the `nav` and `h1` elements. The `Router` component may only have one child element.

Notice when we click the links that the `url` changes but the page does not refresh. This idea of front end routing leverages user's existing intuition around how URLs work without depending on server-side routing. This is made possible by browser features introduced in HTML5.

React Router even takes care of managing the browser history. Notice that when you navigage forward and backwards in your browser history, the URL changes have been recorded.

### Route

We've seen how to navigate to different paths using the `Link` component. Next, the `Route` component will let us render components based on the current path.

In `App.js`:

```javascript

import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/about'>
                <li>About</li>
              </Link>
            </ul>
          </nav>
          <h1>Hello, React Router!</h1>
          <Route path='/about' render={() => (
            <div>
              <h2>About</h2>
              <p>Practicing with React Router</p>
            </div>
          )} />
        </div>
      </Router>
    )
  }
}

export default App
```

Next, we'll add `Route` components so that `<h1>Hello, React Router!</h1>` only shows on the root route and add a `Route` with a path parameter so that when a user navigates to `/greet/:name`, a component with a personalized greeting is rendered.

First however, our `App` component has gotten way too big so we'll break it up:

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './App.css'

function Nav (props) {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

function About (props) {
  return (
    <section>
      <h2>About</h2>
      <p>Practicing with React Router</p>
    </section>
  )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Hello, React Router!</h1>
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
```

Notice that our `Route` component that renders when the `/about` path is matched no longer has a `render` prop but instead has a `component` prop. Will look more into this distinction when we look at path params.

If we have a component defined, we should prefer the `compoent` prop to the `render` prop ([described in the docs](https://reacttraining.com/react-router/web/api/Route/Route-render-methods)).

We can pull `Nav` and `About` into their own files in `src/components/`:

In `App.js`:
```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Hello, React Router!</h1>
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App
```

In `components/Nav.js`:
```javascript
import React from 'react'
import { Link } from 'react-router-dom'

function Nav (props) {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav

```

In `components/About.js`:
```javascript
import React from 'react'

function About (props) {
  return (
    <section>
      <h2>About</h2>
      <p>Practicing with React Router</p>
    </section>
  )
}

export default About

```

Let's add a new `Route` component that will render a custom greeting when the path `/greet/:name` matches:

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Hello, React Router!</h1>
          <Route path='/about' component={About} />
          <Route path='/greet/:name' render={(props) => {
            console.log(props)
            return (
              <h1>Hello, {props.match.params.name}!</h1>
            )
          }} />
        </div>
      </Router>
    )
  }
}

export default App
```

Spend a few minutes looking at three props passed to the `render` method or provided `component` ([`history`, `location`, and `match`](https://reacttraining.com/react-router/web/api/Route/Route-props)).

Let's define a `Greet` component to render when the `/greet/:name` path is matched. We could define this compoent so that it is expecting a `match` prop and use that to interpolate the name:

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

function Greet (props) {
  console.log(props)
  return (
    <h1>Hello, {props.match.params.name}!</h1>
  )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Hello, React Router!</h1>
          <Route path='/about' component={About} />
          <Route path='/greet/:name' component={Greet} />
        </div>
      </Router>
    )
  }
}

export default App

```

This works but `Greet` can only get its props from the `Route` which can be constraining. A very common pattern is to use a render method to pass particular props to a generic component. This will let us reuse the `Greet` component for the 'Hello, React Router!' heading.

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

function Greet (props) {
  console.log(props)
  return (
    <h1>Hello, {props.name}!</h1>
  )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Greet name='React Router' />
          <Route path='/about' component={About} />
          <Route path='/greet/:name' render={(props) => <Greet name={props.match.params.name} />} />
        </div>
      </Router>
    )
  }
}

export default App

```

Finally, lets make it so that the 'Hello, React Router!' message only shows on the root route. We might expect the following to work:

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

function Greet (props) {
  console.log(props)
  return (
    <h1>Hello, {props.name}!</h1>
  )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route path='/' render={(props) => <Greet name='React Router' />} />
          <Route path='/about' component={About} />
          <Route path='/greet/:name' render={(props) => <Greet name={props.match.params.name} />} />
        </div>
      </Router>
    )
  }
}

export default App

```

But if we test this out, we will see the 'Hello, React Router' message on every page.
This is because of the matching expression used by React Router. To make it only match on exactly `/` we need to add an `exact` prop to to that `Route` component. When we give a component a boolean prop, we don't give it a value; it's presence makes it true.

```javascript
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import About from './components/About'

function Greet (props) {
  console.log(props)
  return (
    <h1>Hello, {props.name}!</h1>
  )
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' render={(props) => <Greet name='React Router' />} />
          <Route path='/about' component={About} />
          <Route path='/greet/:name' render={(props) => <Greet name={props.match.params.name} />} />
        </div>
      </Router>
    )
  }
}

export default App

```

## Discussion

Why do we care about routing for our SPAs?

- User Experience
- Bookmarks / sharing links
- Organization
- Alternative means of navigation

## Exercise

Add routing to [Fictional Restaurant Roulette](https://git.generalassemb.ly/wdi-nyc-thundercats/LAB_U03_D03_Fictional-Restaurant-Roulette). We'll be starting with `in-class-6-forms`:

```shell
$ git checkout in-class-6-forms
$ git checkout -b add-routing
```

- Have the root route render the random restaurant picker
- Have the `/restaurants` route render the list of restaurants
- Have the `/restaurants/edit` route render the restaurant form component

## Resources

Keep in mind that React Router went through a fundemental design change with the creation of React Router v4. There is lots of pre-v4 documentation and  tutorials around so when researching/reading about React Router, be sure you are reading about the correct version.

- [Official Docs](https://reacttraining.com/react-router/): Many great examples and comprehensive. Assumes knowledge of other routing and comfort with React.
- [CSS Tricks: React Router v4](https://css-tricks.com/react-router-4/)
- [A Simple React Router v4 Tutorial on Medium](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [React Router Introduction](https://youtu.be/a4kqMQorcnE): YouTube video by the creators of React Router
- [Routing with React Router v4 egghead.io (first couple videos)](https://egghead.io/courses/add-routing-to-react-apps-using-react-router-v4)
