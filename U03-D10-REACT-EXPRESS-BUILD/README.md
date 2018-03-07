# Connecting React and Express!

### Learning Objectives

- Build an app about ice cream!
- Practice setting up a React frontend with an Express backend
- Implement full CRUD functionality into our React app

### IN THIS REPOSITORY ARE THE FOLLOWING THINGS!

- This beautiful readme ✨
- An ice cream API, built with Express (`icecream-begin`)
- That same ice cream API, this time with a React frontend (`icecream-final`)

### WE'RE GONNA DO SOME THINGS!

- Add a React app to serve as the frontend for our Express app
- Create, edit, and delete ice cream records from the database
- Use React Router to handle the different components that are rendered
- Have a really excellent time looking at ice cream

# Step 0: Setting up your environment

- Within the Express app `icecream-begin` run `yarn install` (NOT `npm install!!`)
    - Sidebar: It's best during a project to only use one or the other. This project was initialized using `yarn`, so we need to run `yarn install` to install the dependencies.
- Create a database `icecream_dev` in psql
- Run the migration and the seed file (`icecream.sql`) using `psql -f`.
- In `app.js` change the port from `3000` to `3001`.
- Start the Express app using `yarn dev`!

# Step 0.5: Setting up the React app

We want our Express app to serve our React app. While it's possible to have the react app and the express app be totally separate, it's neater and easier to control to put them in the same place.

- Run `create-react-app client`. It's customary to name the frontend section of your app `client`.
- cd into `client` and run `yarn add axios react-router-dom`, we're going to need to use both of them.
- In `client/package.json`, add this line at the bottom: `"proxy": "http://localhost:3001"`. This allows us to make requests from the frontend to the backend, since they're running on different ports right now. Eventually, we will have the Express app serving the React app, but we want the handy React developer server and its "hot reloading".
- Run `yarn start` to start the react app.

Now we should have an Express app and a React app running at the same time!

# Step 1: Setting up our initial components

- Within the React app, create a `src/components` folder. Then, create the following components (right now, we're just going to work on `Header` and `Footer`:
    - Header
    - Footer
    - IceCreamList
    - IceCream
    - IceCreamSingle
    - IceCreamAddForm
    - IceCreamEditForm
    - Home

In our `App.js`, we want to get rid of all the React boilerplate. We're going to use Router in this app, so the first thing we need to do that is just wrap the entire app in `<Router>`.

```jsx
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          
          <Footer />
        </div>
      </Router>
    );
  }
}
```

We also need to set up the links in our `Header` component:

```jsx
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ice-cream'>Ice Cream</Link></li>
        </ul>
      </nav>
```

And create our `Footer` component.

There's also some css to put into your `App.css` [here](https://git.generalassemb.ly/raw/gist/jlr7245/2bbb3cf417784c9ced00c0621d38f281/raw/8cc3759e40e13be5df433e9b10b846e7f17c0b6f/App.css).

At this point, this is what our three components look like:

<details>
<summary>App.js</summary>

```jsx
import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <div className="container">

            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

```
</details>

<details>
<summary>Header.js</summary>

```jsx
import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>
         Ice Cream!
      </div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ice-cream'>Ice Cream</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
```

</details>

<details>
<summary>Footer.js</summary>

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      Made with ❤️ by WDI 
    </footer>
  )
}

export default Footer;
```

</details>

## 🚀 LAB!

Get your `icecream-begin` app to look like the one we've been working on!

# Step 2: Create our `Home`, `IceCreamList`, and `IceCream` components (and the applicable `Routes`)

Our `Home` page is going to be pretty basic, just a stateless functional component:

```jsx

import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Ice Cream</h1>
      <h3>It is the best dessert!</h3>
    </div>
  )
}

export default Home;

```

Then, in between the Header and Footer in our App component's `render` method, we need to add the applicable route:

```jsx
<Route exact path='/' component={Home} />
```

Next, we should create the `IceCreamList` component. It's going to look pretty similar to the `QuoteList` component. The API call in `componentDidMount` is going to look like this:

```js
componentDidMount() {
  axios.get('/icecream')
    .then(res => {
      this.setstate({
        apiData: res.data.data,
        apiDataLoaded: true,
      })
    })
}
```

Then, we just need to map through the data and render a bunch of `IceCream` components:

```jsx
  renderIceCreams() {
    if (this.state.apiDataLoaded) {
      return this.state.apiData.map(icecream => {
        return (
          <IceCream key={icecream.id} icecream={icecream} />
        );
      });
    } else return <p>Loading...</p>
  }

  render() {
    return (
      <div className="icecream-list">
        {this.renderIceCreams()}
      </div>
    )
  }
```

We also need to create the `IceCream` component. It'll have all the details about the ice cream as well as a link to the ice cream's individual page.

Finally, we need to add the route in `App.js`.

```jsx
<Route exact path='/ice-cream' component={IceCreamList} />
```

<details>
<summary>IceCreamList.js</summary>

```jsx
import React, { Component } from 'react';

import axios from 'axios';

import IceCream from './IceCream';

class IceCreamList extends Component {
  constructor() {
    super();
    this.state = {
      apiDataLoaded: false,
      apiData: null,
    }

  }

  componentDidMount() {
    axios.get('/icecream')
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          apiData: res.data.data,
        })
      })
  }

  renderIceCreams() {
    if (this.state.apiDataLoaded) {
      return this.state.apiData.map(icecream => {
        return (
          <IceCream key={icecream.id} icecream={icecream} />
        );
      });
    } else return <p>Loading...</p>
  }

  render() {
    return (
      <div className="icecream-list">
        {this.renderIceCreams()}
      </div>
    )
  }
}

export default IceCreamList;
```
</details>

<details>
<summary>IceCream.js</summary>

```jsx
import React from 'react';

import { Link } from 'react-router-dom';

const IceCream = (props) => {
  return (
    <div className="ic-inlist">
      <img src={props.icecream.url} />
      <h2>{props.icecream.flavor}</h2>
      <p>Rating: {props.icecream.rating || 'N/A'}</p>
      <Link to={`/ice-cream/${props.icecream.id}`}>See More</Link>
    </div>
  )
}

export default IceCream;
```

</details>

# Step 3: Add the `IceCreamSingle` component

This component will display info about one ice cream at a time.

First, let's make the route for it in `App.js`:

```jsx
<Route exact path="/ice-cream/:id" component={IceCreamSingle} />
```

Then, within the `IceCreamSingle` component, we can access the param that's passed in by using `this.props.match.params.id` (geez!) and use it to make our request in `componentDidMount`:

```jsx
  componentDidMount() {
    axios.get(`/icecream/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          iceCream: res.data.data,
        })
      }).catch(err => console.log(err));
  }
```

Finally, we render that information on the page.

<details>
<summary>IceCreamSingle.js</summary>

```jsx
import React, { Component } from 'react';

import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

class IceCreamSingle extends Component {
  constructor() {
    super();
    this.state = {
      iceCream: null,
      apiDataLoaded: false,
    }
  }

  componentDidMount() {
    axios.get(`/icecream/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          iceCream: res.data.data,
        })
      }).catch(err => console.log(err));
  }


  renderIceCreamOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <div className="inner">
          <div className="img">
            <img src={this.state.iceCream.url} alt={this.state.iceCream.flavor} />
          </div>
          <div className="info">
            <h4 className="brand">{this.state.iceCream.brand}</h4>
            <h1>{this.state.iceCream.flavor}</h1>
            <p>{this.state.iceCream.description}</p>
            <div className="links">
              <span className="rating">Rating: {this.state.iceCream.rating || 'N/A'}</span>
            </div>
          </div>
        </div>
      )
    } else return <p className="loading">Loading...</p>
  }


  render() {
    return (
      <div className="icecream-single">
        {this.renderIceCreamOrLoading()}
      </div>
    )
  }
}

export default IceCreamSingle;
```

</details>

## 🚀 LAB!!!

Follow the steps I just did in class.

# Step 4: Working on Create functionality

Right now, we can view all ice creams and each individual ice cream. But what if we wanted to add _more ice cream_ to our incredible app??? (More ice cream is always a good thing!!)

We need to have an add form in order to do this.

So, let's start writing in our `IceCreamAddForm`.

### State

Our form needs five inputs: flavor, description, rating, brand, and url. Since it's best practice to use controlled forms, let's set those values in state:

```js
this.state = {
  flavor: '',
  desc: '',
  rating: '',
  brand: '',
  url: '',
};
```

### Inputs

Then, we'll reference them when we create our form:

```jsx
<label>
  Flavor
  <input
    type="text"
    placeholder="Flavor"
    name="flavor"
    value={this.state.flavor}
    onChange={this.handleInputChange}
  />
</label>
// etc...
```

### handleInputChange

Next, we need to set up our `handleInputChange` function. We only want to use one function for multiple inputs -- keeping our code DRY, remember -- so we'll write it like this:

```js
handleInputChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({
    [name]: value,
  });
}
```

This function uses the `name` property on the input and sets the same property in `state`. So if the name of my input is `flavor`, then this is the same as saying:

```js
this.setState({
  flavor: value,
});
```

### onFormSubmit

Next comes the action that's taken when the form is submitted. We're posting to the end point `/icecream` in our Express app, and we need properties `flavor`, `description`, `rating`, `url`, and `brand` in the post. That means we can do this:

```js
handleFormSubmit(e) {
  e.preventDefault();
  axios
    .post('/icecream', {
      flavor: this.state.flavor,
      description: this.state.desc,
      rating: this.state.rating,
      brand: this.state.brand,
      url: this.state.url,
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  e.target.reset();
}
```

### Redirecting after form submit

Once the form submits, the user doesn't need to stay on the page; they should go to the page for the ice cream they just created. To do this, we can use the ID we get back from our axios post and React Router's `Redirect` component.

Let's add a `fireRedirect` property to our state that's initialized as `false`. 

Then, we need to modify the `.then` of our post:

```js
.then(res => {
  console.log(res);
  this.setState({
    newId: res.data.data.id,
    fireRedirect: true,
  });
})
```

Lastly, we need to add the redirect component to our component -- but only if `fireRedirect` has already been changed to true:

```jsx
{this.state.fireRedirect
  ? <Redirect push to={`/ice-cream/${this.state.newId}`} />
  : ''}
```

(The way the `Redirect` component works is that if it renders, it'll redirect to another endpoint. THe user doesn't have to click on it or anything.)

(Code adapted from [this gist](https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764))

### Adding the route to `App.js`

Import the `IceCreamAddForm` component and add the route to it:

```jsx
<Route exact path="/add" component={IceCreamAddForm} />
```

<details>
<summary>IceCreamAddForm.js</summary>

```jsx
import React, { Component } from 'react';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

class IceCreamAddForm extends Component {
  constructor() {
    super();
    this.state = {
      flavor: '',
      desc: '',
      rating: '',
      brand: '',
      url: '',
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post('/icecream', {
        flavor: this.state.flavor,
        description: this.state.desc,
        rating: this.state.rating,
        brand: this.state.brand,
        url: this.state.url,
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    return (
      <div className="add">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Flavor
            <input
              type="text"
              placeholder="Flavor"
              name="flavor"
              value={this.state.flavor}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description"
              name="desc"
              value={this.state.desc}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Rating
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Brand
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              value={this.state.brand}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            URL
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/ice-cream/${this.state.newId}`} />
          : ''}
      </div>
    );
  }
}

export default IceCreamAddForm;

```

</details>

## 🚀 LAB!!

Add the `IceCreamAddForm` to your app!

# Step 5: Update and Delete

Ahhh, almost finished. Just two more things to tackle.

#### Update

Our `IceCreamEditForm` is going to look pretty similar to the `IceCreamAddForm`, with two noticeable differences:

- We need to `put`, not `post`, on form submission
- We need to get the data for that particular ice cream when the form loads.

<details>
<summary>IceCreamEditForm.jsx</summary>

```jsx

import React, { Component } from 'react';

import axios from 'axios';

import { Redirect } from 'react-router-dom';

class IceCreamEditForm extends Component {
  constructor() {
    super();
    this.state = {
      flavor: '',
      desc: '',
      rating: '',
      brand: '',
      url: '',
      fireRedirect: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  componentDidMount() {
    axios.get(`/icecream/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res);
        const iceCream = res.data.data;
        this.setState({
          flavor: iceCream.flavor,
          desc: iceCream.description,
          rating: iceCream.rating,
          brand: iceCream.brand,
          url: iceCream.url,
        })
      }).catch(err => console.log(err));
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    axios
      .put(`/icecream/${this.props.match.params.id}`, {
        flavor: this.state.flavor,
        description: this.state.desc,
        rating: this.state.rating,
        brand: this.state.brand,
        url: this.state.url,
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        });
      })
      .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    return (
      <div className="edit">
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Flavor
            <input
              type="text"
              placeholder="Flavor"
              name="flavor"
              value={this.state.flavor}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              placeholder="Description"
              name="desc"
              value={this.state.desc}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Rating
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Brand
            <input
              type="text"
              placeholder="Brand"
              name="brand"
              value={this.state.brand}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            URL
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit!" />
        </form>
        {this.state.fireRedirect
          ? <Redirect push to={`/ice-cream/${this.state.newId}`} />
          : ''}
      </div>
    );
  }
}

export default IceCreamEditForm;


```

</details>

### Delete & linking to the Edit form

Adding the Delete button is as simple as adding a method to our `IceCreamSingle` component.

```jsx
<span className="delete" onClick={this.deleteIceCream}>Delete</span>
```

```js
  deleteIceCream() {
    axios.delete(`/icecream/${this.props.match.params.id}`) 
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }
```

We also have to include that `fireRedirect` snippet at the end:

```jsx
{this.state.fireRedirect
? <Redirect push to="/ice-cream" />
: ''}
```

And link to the edit form:

```jsx
<Link to={`/ice-cream/edit/${this.props.match.params.id}`}>Edit</Link>
```

<details>
<summary>Updated IceCreamSingle.jsx</summary>

```jsx
import React, { Component } from 'react';

import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

class IceCreamSingle extends Component {
  constructor() {
    super();
    this.state = {
      iceCream: null,
      apiDataLoaded: false,
      fireRedirect: false,
    }
    this.deleteIceCream = this.deleteIceCream.bind(this);
  }

  componentDidMount() {
    axios.get(`/icecream/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          apiDataLoaded: true,
          iceCream: res.data.data,
        })
      }).catch(err => console.log(err));
  }

  deleteIceCream() {
    axios.delete(`/icecream/${this.props.match.params.id}`) 
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }

  renderIceCreamOrLoading() {
    if (this.state.apiDataLoaded) {
      return (
        <div className="inner">
          <div className="img">
            <img src={this.state.iceCream.url} alt={this.state.iceCream.flavor} />
          </div>
          <div className="info">
            <h4 className="brand">{this.state.iceCream.brand}</h4>
            <h1>{this.state.iceCream.flavor}</h1>
            <p>{this.state.iceCream.description}</p>
            <div className="links">
              <span className="rating">Rating: {this.state.iceCream.rating || 'N/A'}</span>
              <Link to={`/edit/${this.props.match.params.id}`}>Edit</Link>
              <span className="delete" onClick={this.deleteIceCream}>Delete</span>
              {this.state.fireRedirect
                ? <Redirect push to="/ice-cream" />
                : ''}
            </div>
          </div>
        </div>
      )
    } else return <p className="loading">Loading...</p>
  }


  render() {
    return (
      <div className="icecream-single">
        {this.renderIceCreamOrLoading()}
      </div>
    )
  }
}

export default IceCreamSingle;
```

</details>

### Adding the edit form route to the app

Finally, the _very last step_ is to add the route for `IceCreamEditForm`. 

```jsx
<Route exact path="/edit/:id" component={IceCreamEditForm} />
```

And... we have a full CRUD app. WOOHOO!!

<details>
<summary>Final App.js</summary>

```jsx
import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import IceCreamList from './components/IceCreamList';
import IceCreamSingle from './components/IceCreamSingle';
import IceCreamAddForm from './components/IceCreamAddForm';
import IceCreamEditForm from './components/IceCreamEditForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/ice-cream" component={IceCreamList} />
            <Route exact path="/ice-cream/:id" component={IceCreamSingle} />
            <Route exact path="/add" component={IceCreamAddForm} />
            <Route exact path="/edit/:id" component={IceCreamEditForm} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

```


</details>

## 🚀 LAB!!

Add the final CRUD pieces for your `icecream-begin` app. Reference the `icecream-final` app if something isn't working!!!

# Step 6: Preparing for deployment

Now that we know how to run the react client and express server locally on different ports for development purposes, we need to prepare everything for deployment!

Remember Webpack? Let's use it!

When we use create-react-app, it comes preconfigured with webpack. In your terminal, run the command

```
yarn run build
```

This will create a build folder with everything packaged up and ready to be served by our express app.

We just have to make a few small adjustments to the node server's app.js.

First, we need to remove the root route and let our static files be served up using the default settings.

Comment out the following code in your app.js.

```js
app.get('/', (req, res) => {
  res.send('hello world');
});
```

Next, we need to tell express to use our build folder as the place to serve static files from

```js
app.use(express.static('client/build'));
```

Now we can just run the node server, and our react files will be served up!

If you want to deploy your app to Heroku, just follow the standard instructions like we did for the previous project.

## Extra Resources

- [Proxy with React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)
