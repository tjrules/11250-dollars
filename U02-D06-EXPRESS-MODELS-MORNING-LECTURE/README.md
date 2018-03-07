
# Express Controllers & MVC

### Learning Objectives

- Revisit the MVC pattern
- Review setting up a database, running a migration, and seeding it
- Explain the concept of a model, implement a model
- Explain how to refactor our routes to utilize the MVC pattern
- Explain the concept of a controller, implement a controller

# MVC Revisited

- The Model View Controller (MVC) programming design pattern is a popular coding pattern that favors splitting up an application into multiple logical pieces.
- This pattern is employed to bring testable, modular components to an application's architecture that are easy to maintain.

### Views

- Views contain the HTML code as well as basic logic to display dynamic information inside of the markup.
- We'll talk about how to manage views on Thursday!

### Controllers

- Controllers are the brains of the MVC application.
- When they are called by the router they are responsible for interacting with models and eventually rendering the views.

### Models

- The word "model" here is a two part meaning.
- First of all, it is code that is meant to interact directly with some data persistence layer such as a database.
- Secondly, models are object representations of the data in the database.
- For our application we are using PostgreSQL as our data persistence layer and [pg-promise](https://github.com/vitaly-t/pg-promise) as our database "client" that will interface with the actual database.

## What are we about to do?
In the `quotes-begin` directory you'll find a clone of where we left off on Friday. We are going to refactor that app into an MVC pattern and add the necessary part so that we can use an actual database. The complete refactored app is in the `quotes-final`. You may use that as a reference during the labs, but, **no copy and pasting**. Remember, it's science.

# Part 1: Let's set up our database.

(_Don't_ follow along; you'll get a chance to catch up during lab time.)

1. In the db directory, I added a `config.js` file, a migrations directory that contains a migration file, and a seeds directory that contains a few seed files. A migration typically sets up some tables, and seed files add some mock, test, or starter data to our database.

2. Create the database in psql:
```sql
CREATE DATABASE quotes_dev;
```

3. Run the migration from the terminal to create tables, this command will work from inside the migrations directory:
`psql -f  migration-08222017.sql`

4. Run the seed files. This command will work from within the seeds directory:
`psql -f seed.sql`

5. Set up the config file:

```javascript
const options = {
  query: (e) => {
    console.log(e.query);
  }
};

const pgp = require('pg-promise')(options);

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'quotes_dev',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
```

We are using a node module called pg-promise. pg-promise is the javascript module that will talk to our PostgreSQL database for us. This config file includes information about our database(s), passes that information to an instance of pg-promise that we create, and then assigns and exports that instance of pg-promise to a variable called `db`.

## 🚀 Lab 1

Follow along and complete the steps from part 1. If you run into any errors or have any questions, please take note. We will address errors and questions before moving on.

- cd into `quotes-begin`
- run `npm install` to install the dependencies already in `package.json`
- run `npm install --save pg-promise` to install pg-promise
- create the database `quotes_dev`
- run the migration file and then the seed file as described above
- within the `db` directory create `config.js`
- within `config.js` _type out_ the config file above


# Part 2: Get information about all quotes from the quotes database

### The model

The model that we create in our app will be responsible for doing the actual interfacing with the database. In this case, the model will be where pg-promise actually inserts, updates, and deletes from the database. This is where the CRUD happens.

1. First create a `models` directory in the root of the project. Inside that directory create a `quotes.js` file.

2. At the top of that file, insert:

```js
const db = require('../db/config');

const Quote = {};
```

Here, we first import the `pg-promise` instance that we created in step one. Then, we declare a `Quote` object. Eventually, we'll export this, after we add some methods to it.

3. The method we'll add to get all the information from the quotes table  will be called `findAll`. It looks like this:

```js
Quote.findAll = () => {
  return db.query('SELECT * FROM quotes');
}
```

We named that method `findAll`. We assign it to an arrow function. That arrow function is going to return a promise, since it takes time to go and get stuff from the database. The syntax for this database query is simply `db.query(SQL query)`. Recall that `db` is just our instance of `pg-promise`. `query` is one of the methods we can use with `pg-promise`. It just executes an SQL query.

4. Of course, don't forget to export the `Quote` object.

```js
module.exports = Quote;
```

### The controller

Now that we have a function that gets all the information from our database, we need to call it somewhere. We're going to call it in a _controller_. As you recall, the controller is what handles requests and responses. It creates the functionality of our app.

Like the model, our controller is going to be an object with methods. These methods are the brains of the app. The routes send matching requests to the controllers which then ask the database to do things. After the database is done, they then send our response. 

1. Create a new directory in the root of the app called `controllers`. Then, make a file in that directory called `quotes-controller.js`.

2. Let's import the quotes model and declare an empty quotes controller object that we'll eventually export.

```js
const Quote = require('../models/quote');

const quotesController = {};
```

3. Now we're going to make the controller for the quotes index. It will be called when someone `GET`s the `/quotes` route, and will ask the model to get all the quotes and send them back as JSON data.

```js
quotesController.index = (req, res) => {
  Quote.findAll()
    .then(quotes => {
      res.json({
        message: 'ok',
        data: quotes,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
```

Note that `.then` is followed by `.catch`. This is how we handle errors in promises. It could be anything from a database error to a server error. For example, if the database is down and you try to query it, you'll get an error and `res.json()` won't get called. Instead we just send an error.

4. And, finally, export the controller.

```js
module.exports = quotesController;
```

### The route

Finally, we need to modify our route so that it uses the controller.

In `routes/quote-routes.js`:

1. Import the `quotesController` from its file.

```js
const quotesController = require('../controllers/quotes-controller');
```

2. If we look back at the index controller, we can see that it currently performs the same function as the `/quotes` index route. Therefore, we can pass the controller's index method into the route as the callback function instead of defining it inline.

```js
quoteRoutes.get('/', quotesController.index);
```

Now, when we go to `localhost:3000/quotes`, we get information about all the quotes.

## 🚀 Lab 2

Follow along and complete the steps from part 2. If you run into any errors or have any questions, please take note. We will address errors and questions before moving on.

- Create a directory `models`. Within that directory create a file `quote.js`.
- Import `db/config.js`.
- Initialize an empty object called `Quote`.
- Add a method to `Quote`, `findById`, that makes use of the `pg-promise` `query()` method.
- Export the object `Quote` from the model file.
- Create a directory `controllers`. Within that directory create a file `quotes-controller.js`.
- Import `models/quote.js`.
- Create an empty object called `quotesController`. 
- Add a method `index` to the `quotesController` object.
- Export the `quotesController` object.
- In `routes/Quote-routes.js`, import `controllers/quotes-controller` and modify the `.get('/', ...` route so it uses the `quotesController.index` method.

# Part 3: Accessing individual records in the database

So! By the time our controller and model is done, we're going to have five separate routes:

- GET `/quotes` -- to get all quotes
- GET `/quotes/:id` -- to get an individual Quote
- POST `/quotes` -- to add a new Quote
- PUT `/quotes/:id` -- to update information about a Quote
- DELETE `/quotes/:id` -- to delete a Quote from the database

We've already done the first one. The `PUT` and `POST` routes require us to send information to the server -- we'll tackle those last. The individual quotes `GET` route and the `DELETE` route just require us to send the correct parameters in the URL, so we'll add those next.

### The model

We're going to add two methods to our `Quote` object: `findById` and `destroy`.

In `models/quote.js`:

```js
Quote.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM quotes
    WHERE id = $1
  `, [id]);
}
```

We're making a new method on our `Quote` object called `findById` and setting it equal to an arrow function. The arrow function takes a parameter `id`, which refers to the id in the database of the Quote we want to find. 

Instead of using the `query` method, we're using the `oneOrNone()` method. Since we're trying to find a single Quote, this method will handle that whether or not there is one. The SQL query is only slightly different from what we've seen.

Instead of putting the `id` variable right in the query, we use the `$1` syntax, and then pass a second argument to the method. The second argument is an array that contains all of the values for the items we need in our SQL query. This is a security measure that prevents something called SQL _injection_. 

Here is the classic example of SQL injection:

![bobby tables](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

When the query goes to the database, `$1` will be replaced with the first thing in the array, the id.

The `destroy` method looks similar:

```js
Quote.destroy = (id) => {
  return db.none(`
    DELETE FROM quotes
    WHERE id = $1
  `, [id]);
}
```

We know we don't need to have anything returned back from this query, so we're using the `none()` method from `pg-promise`.

### The controller

In `controllers/quotes-controller.js`, let's write the methods that talk to the model methods we just made.

```js
quotesController.show = (req, res) => {
  Quote.findById(req.params.id)
    .then(quote => {
      res.json({
        message: 'ok',
        data: quote,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

quotesController.delete = (req, res) => {
  Quote.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Quote deleted successfully!',
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
```

In both of these, we're passing `req.params.id` into the model's method. 

In the `show` method, we're getting a Quote back from the database and sending it as json.

In the `delete` method, we're not getting anything back from the database -- we're just sending back a message that it worked.


### The routes

Now, we need to modify our `GET /Quote/:id` route and create a `DELETE /Quote/:id` route that talks to the new model methods.

In `routes/Quote-routes.js`:

```js
quoteRoutes.get('/:id', quotesController.show);
quoteRoutes.delete('/:id', quotesController.delete);
```

Even though both of these are to the same endpoint, `/quotes/:id`, they have different HTTP verbs, so we can use them both without any problems.

## 🚀 Lab 3

Follow along and complete the steps from part 3. If you run into any errors or have any questions, please take note. We will address errors and questions before moving on.

- Add `findById` and `destroy` methods to the `Quote` object in `models/Quote.js`
- Add `show` and `delete` methods to the `quotesController` object in `quotes/quotes-controller`
- Modify the `.get('/:id', ...` route and create a `.delete('/:id, ...` route that both use your new controller methods.

# Part 4: Adding information to the database

### The model

Now we're going to create a method called `create`. This is also an arrow function, it also returns a promise, and it inserts a new Quote into our database.

```javascript
Quote.create = quote => {
  return db.one(
    `
      INSERT INTO quotes
      (content, author, genre_type)
      VALUES ($1, $2, $3) 
      RETURNING *
    `,
    [quote.content, quote.author, quote.genre_type]
  );
};
```

 The argument that this method takes is an object with new Quote info, which looks like this:

 ```js
 {
   content: 'content',
   author: 'author',
   genre_type: 'genre',
 }

 ```

Note that now, since we have to reference three variables in our SQL query, we have items called `$1`, `$2`, and `$3` inside the query itself. Then we pass an array that has three values. `$1` will be filled in with `quote.content`, and so on. Again, this is a security measure. 

### The controller

Now we'll add the controller that will be responsible for adding new quotes:

```javascript
quotesController.create = (req, res) => {
  Quote.create({
      content: req.body.content,
      author: req.body.author,
      genre_type: req.body.genre_type,
    })
    .then(quote => {
      res.json({
        message: 'Quote added successfully!',
        data: quote,
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
```

Note that it calls the `create` method that we defined in our Quote model.

There's something new here, `req.body`. This requires a new NPM package and a new middleware, `body-parser`. Install this with the command `npm install --save body-parser`. Then, we have to tell the app to use this in `server.js`. Add these lines into `server.js`:

```js
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
```

### The route

The create route will be a `POST` request to `/quotes`. Add this to `routes/Quote-routes.js`:

```js
quoteRoutes.post('/', quotesController.create);
```

Let's test this in postman. We'll get a clearer idea of what `body-parser` does.

## 🚀 Lab 4

Follow along and complete the steps from part 4. If you run into any errors or have any questions, please take note. We will address errors and questions before moving on.

- Add a `create` method to the `quotes` object in `models/quote.js`.
- Add a `create` method to the `quotesController` object in `controllers/quotes-controller.js`.
- Install `body-parser` and require it in `server.js`. Add the two `server.use` lines as well.
- Add the post route to `routes/quote-routes.js`.

# Part 5: Putting it all together!!!

We're almost done!!! Can you believe it? The last thing we have to do is make a way to edit quotes in the database. This will require both the use of params and the use of the request body.

### The model

Let's add a new method to our model, `update`.

```js

Quote.update = (quote, id) => {
  return db.one(`
    UPDATE quotes SET
    content = $1,
    author = $2,
    genre_type = $3
    WHERE id = $4
    RETURNING *
  `, [quote.title, quote.year, quote.genre, id]);
}
```

This method takes two arguments, a Quote object and an id. Then, it updates the Quote where the id matches.

### The controller

Let's add an `update` method to our controller. Notice that we're still using `req.body`. We're also using `req.params.id`.

```javascript
quotesController.update = (req, res) => {
  Quote.update({
    content: req.body.content,
    author: req.body.author,
    genre_type: req.body.genre_type,
  }, req.params.id).then(quote => {
    res.json({
      message: 'Quote updated successfully!',
      data: quote,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
```

### The route

Last piece of the puzzle!!!

In `routes/Quote-routes.js`:

```js
quoteRoutes.put('/:id', quotesController.update);
```

Test it out in Postman, and we're done.

## 🚀 Lab 5

Follow along with the steps in part 5. Then, you'll be all done!

- Add an `update` method to the `Quote` object in the model
- Add an `update` method to the `quotesController` object in the controller
- Add a `.put('/:id', ...` route to the routes

# WE MADE IT!!! 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉

(I'm just as pumped as yall are.)

### To recap:

- We use the module `pg-promise` to connect our postgres database with our express app.
- `pg-promise`, as the name suggests, uses JavaScript promises to handle getting data out of the database. We access the result of these promises using `.then`, and handle errors using `.catch`.
- Instead of sending back the data directly in our routes, we manage the connection between our models and our routes using controllers.
- Express is very flexible; there are a billion ways to do things.
- Today was long and hard. You're all superheroes.

