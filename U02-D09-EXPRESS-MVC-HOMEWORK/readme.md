![To Do List](https://i.giphy.com/xTiTnuhyBF54B852nK.gif)

# To Do List
Let's make a full CRUD app!

## Learning Objectives
* Express (MVC pattern)
* EJS Templating
* CRUD Functionality
* PG-Promise (Postgresql Integration)

## Setup
No starter files!

## Completion
Parts 1 - 7 are required for completion, and 8 and 9 are bonus.


## Submission
Homework is due tonight at 11pm

## Assignment
Tonight we're going to make our first real, To Do List app! To Do Lists might not be the most exciting app to build, but it's a great way to practice implementing full CRUD functionality in a web application.

#### Part 1 - Create a new Node App
Directions are going to be a little more sparse as you should be able to start remembering all the steps you need to perform.

* Create a folder for your application
* Initialize your Node app
* Set up the folder structure for your app - For example: `views`, `controllers`, `models`, `public`, `migrations`, `config`, etc
* `npm install --save` any modules you might need
    - express
    - ejs
    - body-parser
    - pg-promise
* Add a `.gitignore` file and add the following files and folders to it:
    - `.gitignore`
    - `node_modules/`
* Prepare as much of the app structure as you can remember. Before you actually start coding, perform an initial `git commit`.

#### Part 2 - Set Up the Database

* Enter `psql` and create a new database called `todo_app`
* Create an `add-todo-table.sql` file in the folder `migrations/`
* In `add-todo-table.sql`, create a table called `tasks`
* `tasks` should have columns for:
    - id
    - subject
    - content
* Once your migration is ready, to run it with the command `psql -d todo_app -f add-todo-table.sql`
* Make sure your database is set up properly before moving on

#### Part 3 - Core App Functionality

Hopefully at this point the setup process for Node/Express apps is becoming more familiar. Set up the following files/folders:

* `app.js`
* **Controllers**
    - `todo-controller.js`
* **Models**
    -`todo.js`
* **db**
    - **migrations**
        - `add-todo-table.sql`
    - **seeds**
        - `seed.sql`
    - `config.js`
* **Views**
    - `index.ejs`
    - `show.ejs`
    - `new.ejs`
    - `edit.ejs`

Before moving on, make sure that your To Do app starts without any errors and can display a simple index page.

#### Part 4 - Set Up Our Model

Now let's connect our Postgres database with our app using **pg-promise**.

* In `db/config.js`, using **pg-promise**, establish a connection to your postgres database called `todo_app`
* Export this database
* Within `models`, create a `task.js` file
* In `task.js`, create a `Task` object with methods for `findAll`, `findById`, `create`, `edit`, and `delete`
* Remember to export this model
* Now would be a good time to open `psql` it the terminal and manually insert a test row into our `tasks` table so that we can test our **model** later

#### Part 5 - Confrim Everything Works

Let's put the finishing touches on this To Do app and confirm everything works.

* Make sure there is something in your `tasks` table so that we can test our To Do app
* Update your **controller** to `require` the `Task` model and pass data to the view
* Update your **views** to incorporate the data being fed from the **controller**
* Spin up your server, navigate to `localhost:3000/tasks` and confirm that your `index.html` is being rendered with data from your `tasks` table

If you made it this far, congrats! You're about halfway done! Next is the last two parts of CRUD, and then some fun stuff

#### Part 6 - Edit Functionality

Implement UPDATE functionality. You'll need to add an Edit **view** and update the **controller** and **model**.

#### Part 7 - Delete Functionality

Implement DELETE functionality. Think about what files need to be updated to make this work.

#### Part 8 BONUS - Style this bad boy so it looks nice!

#### Part 9 BONUS - Install `bcryptjs`, `cookie-parser`, `express-sessions`, `passport`, and `passport-local` and get auth-y in here! Spoiler alert: you'll need to add a couple more views to pull off this bonus




