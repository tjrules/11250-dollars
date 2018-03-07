# Intro to Express

## Learning objectives

* Asynchronous JS and why it's so powerful
* What MVC is 
* Why use Express over Node?
* Breaking down everything that goes into a route response cycle
* Coding our very own Express app!

## Demonstrating Asynchronous API

## Narwhal coffee shop
![screen shot 2017-12-14 at 1 36 56 am](https://user-images.githubusercontent.com/6153182/33978785-5a6e3e06-e06f-11e7-9362-78611b127468.png)


let's type this code into our console
```javascript
console.log('insert fancy order');
console.log('regular black coffee');
```
but what if we were to run this asynchronously?
```javascript
setTimeout(function() {
   console.log('insert fancy order');
   }, 3000);
console.log('black coffee');
```

## Thanks ELI5 reddit! :alien:
![screen shot 2017-12-14 at 1 38 29 pm](https://user-images.githubusercontent.com/6153182/34008732-5222aba0-e0d4-11e7-8252-9321b1f49702.png)



The Asynchronous model is extremely efficient in terms of speed and server resources.

# Next up: MVC

2 ways that to visualize MVC:

![Alt Text](https://media.giphy.com/media/ACpKIKVrOXuKY/giphy.gif)

![Alt Text](https://media.giphy.com/media/zhG2sDdPpXgDS/giphy.gif)

## Ok fine- here's a more "computer-y" image :expressionless:

![complete-mvc-on-nodejs-26-638](https://user-images.githubusercontent.com/6153182/34004783-d5e7cc80-e0c6-11e7-946d-39a263264e38.jpg)

# But why use Express? ie what can Express do that Node can't?

These common web-development tasks are not directly supported by Node itself. 
-  handling for different HTTP verbs (e.g. GET, POST, DELETE, etc.), 
-  separately handle requests at different URL patterns (ie "routes")
-  methods to specify which template engine is used (ie "view")
-  serve static files
-  use templates to dynamically create the response


# Enter Express

# So what does Express code look like?

Glad you asked! Let's take a look 


## Hello, Jerry 

![hello-newman](https://user-images.githubusercontent.com/6153182/33978843-9e988e24-e06f-11e7-8c9d-e19884cb635a.jpg)

Let's write our first Express code and see what it would look like in the browser:

```javascript
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello, Newman.');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
```

-  We first need to go to our directory and run it in our terminal using the `node app.js` command.
-  Then we have to go to our browser and listen on a localhost and we'll see our code

![Alt Text](https://media.giphy.com/media/eSMZFmPb6pbk4/giphy.gif)

### Breakdown- what happened?

-  **First line** `require()` imports the express module and creates an Express application. 
-  **Second line** this object, which is traditionally named `app`, now has access to methods for routing HTTP requests, configuring middleware, rendering HTML views, and registering a template engine (among others).

-  **Middle part** of the code (ie `app.get`) shows a route definition--  we'll touch on this in more detail below.

The `app.get()` specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response object as arguments, and simply calls send() on the response to return the string "Hello, Newman."

-  **Final block** starts up the server on `port '3000'` and prints a log comment to the console. With the server running, we can go to `localhost:3000` in our browser to see the example response returned.

# Modules
Express is itself a module!

-  A module is a JavaScript library/file that you can import into other code using Node's `require()` function. Express itself is a module, as are the middleware and database libraries that we use in our Express applications.


# Codealong time!


## Let's get our feet wet with Express by building a Quotes app

![screen shot 2017-12-14 at 9 51 00 am](https://user-images.githubusercontent.com/6153182/33998059-6cefef94-e0b4-11e7-9ffc-46e2de2758c1.png)

#### Before we get started, let's look at how routes are handled on ESPN.com:

1. `mkdir express-quotes`
2. `cd express-quotes`
3. `npm init` (Hit enter to accept the defaults and see the new [package.json](https://docs.npmjs.com/cli/init) file
4. `npm install express --save` (The `--save` option adds the module as a dependency in your package.json file. This allows anyone looking at your app (i.e. a dev team member) to be able to see what your app is "made of" and if they clone your app and run `npm install` all dependencies will be installed.
5. `touch app.js` in express-quotes directory

Check out the package.json file:

```json
"dependencies": {
  "express": "^4.16.2"
}
```

Let's start coding!

```javascript
// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Example app listening on port 3000!');
});
```
Notice the `listen` verb here - this can also be use, post, put, delete, etc (these are all methods of the instance of [Express](https://expressjs.com/en/api.html)).

##### um, is this like HTML? Can I refresh after every change?
Not initially, and it's annoying AF :/

But...

## Nodemon aka `npm run dev` 
What is `nodemon` you ask? It is a utility that will monitor your source file (app.js in our case) and automatically restart server. Otherwise, you would need to run `node app.js` after every small change in your file, which is super super annoying 🙄. We need to install it first, so in your terminal run

```bash
npm install --save nodemon
```


Then, we need to run our app. In your `package.json`, modify `scripts` to reflect this:

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
```
and let's use the method:

run `npm run dev`

Navigate to `http://localhost:3000` and... boom! goes the dynamite.

Now this is pretty sweet but it's just a static page. Plus, what if we want to start creating pages instead and render stuff on the page?

# Routing in Express 

**Routing** is the definition of application end points (URIs) and how they respond to client requests. They can receive any of the HTTP verbs (GET, POST, PUT, DELETE), and need to be prepared to handle them accordingly. 
-  Consider them resource identifiers, where a typical resource can be an image, webpage, music file, or a request to take kick off a function call. 
-  A function call could be something like executing a call to update/delete/put an entry in a database.

### Let's break down all the parts of a router

- **"/"**: Sets the pattern for our route. In this case, it's the root page
- **req**: Represents incoming http `request` object for end point resource.
- **res**: Represents the `response` object that you give to the user/client/requestor. Resource can be a webpage, video file etc...
**Since both `req` and `res` are objects, they have various methods we can use to manipulate**
- **res.send:** is one of the methods of `response` object. It sends the response back to the requestor.

[ExpressJS 4.0](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4) comes with the new Router. Router is like a mini Express application. It doesn’t bring in views or settings but provides us with the routing APIs like `.use`, `.get`, `route` etc..

# Let's look at routes and handler callback functions in Express routes:

### An Example in play:
```javascript
app.get('/', function(req, res) {
  res.send('Hello, Newman! <h1>Newman! #clenchingfist</h1>');

});
```
Routes in Express are created using methods named after HTTP verbs. In the example above, we created a route to respond to GET requests at the root of the app. You will have a corresponding method on the app object for all the HTTP verbs.  In this example, we'll send back text as a response.

## Adding more routes to our application

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello, Newman! <h1>Newman! #clenchingfist </h1>');
});

app.get('/quotes', function(req, res) {
  res.send('You just hit the quotes route!');
});

app.get('/cats', function(req,res){
  res.send('route! there it is');
})
```

### but we're hear to build a quotes app, so let's focus on that 

##### (side point) uh... where are we getting our quotes from?

Glad you asked! (see accompanying folder)
- `mkdir db` & `touch quotes.js`, paste boilerplate code 

### back to our app.js

At the bottom of `app.js` we're going to add:

```javascript
app.use('/quotes', quotes);
```
#### Why?
-  middleware- McDonalds example (HT Joe)
![screen shot 2017-12-14 at 12 43 37 pm](https://user-images.githubusercontent.com/6153182/34008872-c11372d8-e0d4-11e7-84be-49b3cac3cc56.png)

You can use Express middleware to add support for cookies, sessions, and users, getting POST/GET parameters, etc.


Thus it will tell express middleware to use everything associated with quotes route and add a callback `quotes` to be executes on that call:


### We should probably create a separate routes folder for our quotes code...

#### Creating a quotes module

Let's put this new module into another file to separate it from our `app.js`

```bash
$ mkdir routes
$ touch routes/quotes.js
```

Inside this file we need to move all of our route handlers for `quotes` and at the end of the file, we need to export our router:

![screen shot 2017-12-14 at 12 23 44 pm](https://user-images.githubusercontent.com/6153182/34005699-c735a11e-e0c9-11e7-8983-5b98d220d074.png)


### Benefits of using express.Router():

- Helpful in separating out concerns
- Always has a dedicated handler to address any routes being requested.
- Modularity, mountable, and helps keep things DRY


```javascript
const express = require('express');
const router = express.Router();
```

and don't forget to include the quotes we'll be using!

```javascript
const quotes = require('../db/quotes');
```

Now let's go back to our `app.js`, and we need to require this route at the top so we can access it:

```javascript
const quotes = require('./routes/quotes');
```

in our `routes/quotes.js` we have to add this so we can export it. 
```javascript
module.exports = router;
```
`module.exports` is the object that's actually returned as the result of a require call.

> Note: don't forget to import the quotes as well :)


## Restful Routing 

We will use the RESTful standard to build our web apps. Today, we'll only cover how to handle GET requests, but we can create callbacks for all types of requests. Let's create some routes for our quotes!

```javascript
// set up root route using 'GET' http verb
// get ALL quotes
router.get('/', function(req, res){
  res.json({
    quotes
  });
});

router.get('/:id', function(req, res){
  // let's reassign our parameter to `id` for readability
  let id = req.params.id;
  // id is passed as a string
  // need to parse it first
  parseInt(id);
  // now we can render it on the page!
  res.send(
    `
    <h1>${quotes[id].text}</h1>
    <h2>Genre: ${quotes[id].genre}</h2>
    <h3> By ${quotes[id].author}</h3>
    `
  )
});
```
## Independent Practice (30 minutes)

In the LECTURE directory you will find a `lab` folder. Look for instructions there.

