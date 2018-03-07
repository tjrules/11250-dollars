# Back End API Calls

![make a call](https://media.giphy.com/media/3o6Zt848s5ZzevKRhe/giphy.gif)

## Learning Objectives
* Understand the importance of back-end API calls
* Start playing with axios to make back-end calls
* Understand the importance of a .env file to hide API keys
* Use a .env file to hide a key and practice applying it


## What have we learned about APIs so far?
* We know how to hit them using jQuery AJAX. 
* We know how to treat the data from them when we make calls from the front end
* We've been able to successfully render data from our API call on our page using jQuery/vanilla JavaScript

## What are we going to be doing?
* Use `axios` to make the same call from our server
* Use `ejs` to render data made from our call
* Construct a route on our server that makes API calls
* Use that route to render an `ejs` file after making a successful call
* Secure that call using an API key
* Protect that key using a `.env` file


## What is the merit of a back end call?

Some APIs are locked. For whatever reason, their data is secure and accessing the API requires some sort of authentication, usually in the form of a key. Getting a key for these APIs depends on the API itself. Usually it's as easy as just asking for it. These APIs are still free, and they don't require any type of committment; but they just want to have some level of protection for their data.


## How do I make a call from the back end?

Let's start with installing a new npm package, `axios`. 

So what does `axios` do? It makes AJAX calls. It acts just like `$.ajax({})`, and, here's the kicker, it uses THE SAME SYNTAX!!! We're going to be using this going forward. We will never use jQuery AJAX ever again. 

The reason we're gonna use axios is because it's so much faster than jQuery because it's so slow. We'll never have to load ALL of jQuery (DOM Manipulation library, AJAX library, etc etc) when all we want is one or two methods from it. This will speed up our app by a lot. We may or may not see a difference as humans, but our computers will feel it.

So what does an axios call look like?

```javascript
const axios = require('axios');

axios({
	method: 'get',
	url: 'your-url-here'
	})
	.then( data => {
	//code here
	})
	.catch( err => {
	//code here 
	})
	
```

Knowledge Check: Based on how this looks, where might this code block go? Will we need to wrap it in anything?


## Why should I care about that?
Because some APIs don't allow for requests from the front end (i.e. using a browser instead of a server) because most malicious attacks come from the front end. 

Using your back end makes it so that you are assured to make a call that goes through, but it also stops nasty human beings from stealing your API key. 

## How do I stop someone from stealing my key?
There is an NPM package that allows you to create a file that protects your file. This is called a `.env` file, and the package that allows you to configure such a file is, coincidentally, called `dotenv`. It's a simple one line of configuration in your top-level `app/server/main/index.js`

```javascript
require('dotenv').config()

```

Once we have that, the next thing we do is actually `touch .env` on the top level of our express app, and then add the following line:

```javascript
API_KEY: (your api key here)
```


# I Do
Watch as I build out an express server and configure it to use a form to make a 2-Step API Call.

Code along if you want, but the lab you'll be doing will be hitting a separate API. 

# You Do

Take a look at the OpenWeatherMap API. Rinse and repeat what I just did.

1. Write up your standard express app, configure `body-parser`, `express`, `morgan`, `ejs`, and `dotenv`
2. Construct a landing route for when someone hits `localhost:3000`
3. Construct a `routes/weather-routes.js` file to be used when a user navigates to `/weather`
4. Construct a `controllers/weather-controller.js` file that will hold two methods. 
	* Your first method should render a `views/weather/index.ejs` file that holds a form whose `action="/weather/search"` and `method="POST"`, with an input field that takes a zip code (it can be a text-type input field). The value in this field will be what we pass to our API as a search term. 
	* Your second method should make an API call using `axios`. The axios call should bring in your API key from your `.env` file, and take in the value passed from your front end form. Upon a successful call, you should render a page, `views/weather/results.ejs` that has data to be templated over. Before constructing this method, you should have tested your API call in Postman to make sure your URL is correct

5. Edit your `weather-routes` file to listen for a `GET` request to `/` and calls the method from your controller that renders your `index` file and a `POST` request to `/search` that makes your API call.
6. Edit your `views/weather/results.ejs` file that uses `ejs` templates to display the data.

# We Do

Review Questions: 

* What is the purpose of a `.env` file?
* What does `axios` do for us?
* How does a form help us pass data to our back end?
* Why do we make API calls from our back end?

## Lab Review
