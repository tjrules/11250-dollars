# Express Views 👀

### Learning Objectives

- Rendering A Static Index File
- Describe the concept of "templating" at a high level
- Create templates and render views in an Express application
- Apply EJS syntax to insert data into HTML
- Render partials and iterate over data in views
- Differentiate between `res.send`, `res.render`, and `res.redirect`
- Analyze pages to spot what elements could be abstracted into partials
- Deleting quotes using method-override

## Rendering A Static Index File 

The most basic of servers render at least a static index.html file.  

#### DEMO...

Go to a site to view `Sources` tab and inspect the files that are being sent and\or are viewable by the client. Possible suggestions are the recent `Pizza` app or `http://gafeedr.surge.sh/#`

Now instead of using `res.json()` or `res.send` let's configure our server to send an index.html file to the client using `res.sendFile()`

First configure express to render static index.html files.

```
// static files
app.use(express.static('public'));
```

Next configure the default route send the static file.

```
// Our index route!
 app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
 })
```

And finally create a `public` folder and add an `index.html` file.

# What _is_ a view, anyway?

**The term "view" in the context of a full-stack application refers to what a visitor to the site sees when the page loads.** Views are how the information in the database -- the model -- is represented in the browser.

### View engines (a.k.a templating engines)

We're probably all familiar with the term "template" -- a document that already has some details in place, but needs to have the rest of them filled in. **Templating engines** in JavaScript allow us to fill in the blanks in our HTML with JavaScript without having to do a ton of string concatenation or DOM manipulation.

Having a Node backend gives us the ability to use a templating engine, which is one solution to this problem.


## We'll be using a templating engine called EJS.

EJS stands for **Effective JavaScript** (or Embedded JavaScript), and it lets us inject JavaScript directly into our HTML by surrounding it with special marker tags.

Here's is a basic example of EJS:

```html
<% const myName = 'marty mcfly'; %>
<div id='mydiv'>
  <p>
    Hello, my name is <%= myName %>. 
    <a href='/<%= myName %>'>Learn more</a>
  </p>
</div>
```

Short and sweet, right? Notice the `<% %>` and `<%= %>` tags in the above block. These are what allow us to inject JavaScript into our HTML. 

- `<% %>` allows us to declare variables, do loops, do conditionals, etc. Normal JavaScript-y things.
- `<%= %>` allows us to output the values of variables.
- There are a few other clown tag variations. You can check them out [in the EJS docs](http://ejs.co/).

Files that use EJS have to have the extension `.ejs`. For example: `index.ejs`.

We'll see some examples of this in a few minutes, after we learn how to...

### Add a templating engine to an Express app!

Adding the view engine is a fairly straightforward process.

- Install the templating engine of choice. We're using EJS, so the command is `npm install ejs --save`.
- Create the `views` directory right inside `quotes-begin` -- not in any of the subfolders. Inside it, create a file called `index.ejs`. This will be blank for now.
- In between the port setup and the static file setup in `app.js`, we're going to add two lines, one to tell the app where to look for our templates and the other telling it what kind of template to expect.

```js
// where to look for the template:
//       | what we're setting
//       V           v where to look for the views
app.set('views', path.join(__dirname, 'views'));
// what kind of template:
//       | what we're setting
//       V               v what kind of view engine to expect
app.set('view engine', 'ejs');

```

Now what?

### `res.render`

Yesterday, we used `res.send`, which is a method on the response object that allows us to send data back to the client. `res.render` is a similar concept, except it allows us to first put all that data into a template.

Here's what the syntax for rendering an index page with a `'hello world!` message looks like:

```js
//              | what file to look for (`views/[whatever].ejs`, in this case `views/index.ejs`)
//              V        v an object that contains the data we're sending
res.render('index', { message: 'Hello world!' });
```

This can go in place of `res.sendFile` in the `app.get` function. (We also have to delete `index.html` from our public folder. Otherwise the app will serve it instead. [Relevant stackoverflow answer here](https://stackoverflow.com/questions/25166726/express-serves-index-html-even-when-my-routing-is-to-a-different-file))

In `app.js`, for the root route:
```js
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello world!'});
});

```

Then we can use `message` in our `index.ejs` file.

In `views/index.ejs`, within an HTML5 boilerplate:

```html
<h1><%= message %></h1>
<!-- outputs `<h1>Hello world!</h1>`  -->
```

This is cool, but not that exciting. Let's pass in some more data.

In `server.js`, for the root route:
```js
app.get('/', (req, res) => {
  res.render('index', { 
    message: 'Hello world!',
    documentTitle: 'DressealHaus quotes!!!',
    subTitle: 'Check out some cool info on the best quotes around.',
  });
});
```

Now we can access all of these variables in our EJS.

## 🚀 Lab 1 - 15min

In `quotes-starter`, run `npm install` to install the dependencies and get the app working. Then, add a `views` directory and touch an `index.ejs`. Follow the steps in the lecture markdown to set up the root index. Remember to delete `index.html` from the `public` folder.

# Templating with loops

One of the powerful things about EJS is that it allows us to adjust the page layout based on what data is passed to it. Let's create a view for all of our quotes, the `/quotes` route.

- In `/views`, make a new directory `quotes`. This is where all of our quote views will live.
- In `/views/quotes`, touch `quote-index.ejs`. This is the view that will render when we visit `/quotes`.

Next, we have to modify our index controller so that it sends back a view instead of JSON data.

In `controller/quote-controller.js`:

```js
quoteController.index = (req, res) => {
  quote.findAll()
    .then(quotes => {
      // this is what changes
      res.render('quotes/quotes-index', {
        message: 'ok',
        data: quotes,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};
```

Finally, we need to loop through our data in EJS.

In `views/quotes/quote-index.ejs`, within an HTML5 boilerplate:

```
  <a href="/quotes/add">Add quote</a>
  <% for (let quote of data) { %>
    <div class='quote'>
      <h1><%= quote.title %></h1>
      <a href='/quotes/<%= quote.id%>'>Learn more</a>
    </div>
  <% } %>
```

We can accomplish this same thing with a regular for loop, or map, or forEach.

You may notice that, in this view, we're linking to the individual page for each quote. Let's change that.

In `views/quotes`, touch `quote-single.ejs`. Then, within an HTML5 boilerplate, add this:

```
    <div class='quote'>
      <h1><%= data.title %></h1>
      <h3><%= data.genre %></h3>
      <h3><%= data.year %></h3>
      <a href='/quotes/'>See all quotes</a>
    </div>
```

Then, we need to tell our `quoteController.show` method to render a page instead of sending back JSON.

```js
quoteController.show = (req, res) => {
  quote.findById(req.params.id)
    .then(quote => {
      // here is the change
      res.render('quotes/quote-single', {
        message: 'ok',
        data: quote,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
```

### Modularizing our EJS

Let's take a look at the views files we have so far. What do they all have in common? We can abstract some of those out using **partials**.

Partials are pretty much what the name sounds like -- parts of your HTML that can be inserted into any document. For example, if we were to abstract the HTML5 boilerplate to its own `boilerplate.ejs` file, we could put it at the top of any file by saying:

```html
<% include ./partials/boilerplate %>
```

OR

```html
<% include ../partials/boilerplate %>
```

(Depending on where in the views directory you are.)

We can also abstract the `</body></html>` tags to their own partial, for neatness: `end.ejs`.

You can even nest partials inside of other partials. For example, if we decided to make a `navigation.ejs` partial and add a menu bar, we could include it in the `boilerplate.ejs` partial.

## 🚀 Lab 2 - 20min

Get caught up with where we're at so far! By the end of this lab, you should have:

- `views/quotes/quotes-index.ejs` and `views/quotes/quote-single.ejs`.
- `views/partials/boilerplate.ejs` and `views/partials/end.ejs`
- BONUS: Try creating a navigation partial or a footer partial. Include them in the boilerplate or end partials, respectively.

# The CRUD view pattern

### What is CRUD?

CRUD, in the web development context, stands for **C**reate, **R**ead, **U**pdate, **D**elete. Most apps are, at their core, CRUD apps: creating, updating, editing, and deleting information like Facebook posts, Pinterest pins, Etsy listings, etc. is essential. 

So in the end, our `views/quotes` directory would look something like this:

```bash
quotes
  ├── quotes-index # [`/quotes`]
  ├── quote-add # [`/quotes/add`]
  ├── quote-single # [`/quotes/:id`]
  └── quote-single-edit # [`/quotes/:id/edit`]
```

There's no specific delete page -- we can have delete buttons on `quotes-index` and `quote-single`. And `quote-single-edit` is specific to the quote we want to edit.

Today we're only going to talk about the post route.

### Creating the `/quotes/add` route

First, let's create a very simple form view, `views/quotes/quote-add.ejs`:

```html
<% include ../partials/boilerplate %>
 
<form method='POST' action='/quotes'>
  <input name='content' type='text' placeholder='content' />
  <input name='author' type='text' placeholder='author' />
  <input name='genre_type' type='text' placeholder='genre'>
  <input type='submit' value='Submit!' />
</form>

<% include ../partials/end %>
```

This might look a little different from forms you've seen so far, notably the `method` and `action` attributes.

- `method` just refers to the type of HTTP action we're taking. It will nearly always be `POST` in all caps.
- `action` refers to the endpoint the form will post its data to. In this case, just the `quotes` main route.

Next, we have to create the route for the form. **IMPORTANT**: This **MUST** go above the "get individual quotes" route.

```js
/* add quote route */
quoteRoutes.get('/add', (req, res) => {
  res.render('quotes/quote-add');
});
```

You might notice that instead of putting this render into our controller, we leave it in our route file. That's fine, since we don't need to get any data from the database here.

### Submitting the form

If we go to `/quotes/add` and fill out the form, we notice that it already adds it to the database and sends back information. This is because we already had the post route set up from yesterday, and we didn't need to change it to accept the form submission. We were using `req.body` to get the data from our API calls, and we're still using `req.body` to get information from the form that's being submitted.

### `res.redirect`

So far, we've used `res.send`, `res.json`, and `res.render`. Another commonly-used response object method is `res.redirect`. It's most commonly used on pages like this, where the desired behavior after an action is complete is to redirect to a page. Pretty self-explanatory.

In the `create` method of `controllers/quotes-controller.js`:

```js
quoteController.create = (req, res) => {
  quote.create({
    title: req.body.content,
    year: req.body.author,
    genre: req.body.genre,
    // this line changed
  }).then(() => {
    // so did this one
    res.redirect('/quotes');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
```

Notice that instead of being able to use a relative url (like we did when we set up the `get` route for quotes), we're using the actual path the browser will follow.

Cool?

Lab time!

## 🚀 Lab 3: Let's get caught up again. - 20min

Take the next block of time to make your `quotes-begin` directory look like what we did together in class. If you need a hint, check out the `##### paste your command here-quotes-final` directory -- it should look exactly like what we did together.


## Deleting Quotes - TIME PERMITTING

Providing the user the ability to delete and item starts with adding a `delete` button that is positioned somewhere near the quote that your looking to delete.  This can be done by editing the `quotes-index.ejs` file and adding the following:

```
<form action="/quotes/<%= quote.id %>?_method=Delete " method="Post">
  <input type="Submit" value="Delete"/>
</form>
```

The first thing you might have noticed is that the method is `Post` and that the action contains a query string `_method=Delete`.  There is no `Delete` method as forms are used to submit information so the way we can initiate a delete is to use action.  

To use the `_method=Delete` requires the help of middleware, in this case `method-override`.  

```
npm install method-override --save
```

Once installed express is configured to `use` the middleware with the override being determined by setting the action's query string to `_method=Delete`. 

```
app.use(methodOverride('_method'))
```

## 🚀 Lab 4: Deleting quotes - 20min

It's time to try using the delete route. Using the knowledge you have so far about Express and routes, in addition to the [method-override module](https://github.com/expressjs/method-override), add a delete button to the quote details page to delete that quote. Once the quote is deleted, the user should be redirected to the list of quotes.


