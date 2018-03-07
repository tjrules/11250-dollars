# Webpack

## Learning Objectives
* Understand what Webpack is and what it does
* Learn about the problems that Webpack solves
* **Know that it isn't necessary to know how it works**
* Configure Webpack for a simple web application

## Server-Side Rendering vs Single Page Apps (SPAs)
> Before we start, what does the term 'server side rendering' mean to anyone? Have we seen instances of this before? Take 3 minutes to discuss

As it happens, SPAs require a lot more front-end javascript to run because all of the responsibility falls on the client (i.e. the browser) to render all of the information. 

## Pros and Cons of each way of handling lots of javascript code

Front end javascript code is how we dictate the way by which any given user makes their way around our site. So having lots of front end javascript makes for a lot of user interaction BUT we have to be very careful on how this code is presented, otherwise we're gonna have a really bad time.

> Time for discussion: In terms of file structure, what are the ways we can handle large amounts of code? Take 5 minutes to see if you can figure it out

 It's one of two ways: a small number of large files, or a large number of small files. Both ways come with pros and cons which we're gonna go over.
 
 > Go over the troubles of a small number of large files: 
 
 * Finding the one line of code you need to change in a file that's tens of thousands of lines long
 * Once you find that line, it might have unforeseen consequences for the other 9999 lines of code in the file
 * Getting other people up to speed with your code is gonna be a giant pain in the ass

 > Go over the pros and cons of a large number of small files: 
 
 * Pro: code is modular, so everything is segmented and we know where everything is
 * Pro: it's readable; we can see exactly what we're doing and we know what every line does, and every consequence of changing a line of code
 * Con: Since everything is modular and everything is broken up, everything needs to load in a specific order since some files will depend on other files
 * Con: Once this program gets sufficiently large and files get more and more dependent on each other, load order becomes more and more important, but also becomes harder and harder to maintain.

## How does Webpack help us solve these issues?
 
 Effectively, Webpack takes a whole bunch of tiny javascript (or, as we'll see later, CSS) files and bundles them all up into one file that is run as a script in the HTML. So what we'll be doing is writing a lot of small javascript files, which lets us dodge the problem of not being able to find the one line of code in a giant file, all loaded in the correct order, and then compiles them into one giant file that we won't really ever need to touch, which lets us dodge the problem of trying to track the order in which our files load in our browser.
 
 > BIG BIG BIG DISCLAIMER!!!! The only people who know exactly how webpack does the stuff it does are the people who built it. No one will expect any of you to explain back to them exactly how Webpack does what it does. All you need to know at the end of this lesson is that Webpack takes a bunch of javascript files, compiles them, and then feeds them into one file for our HTML to load, then we all win.
 

## Loaders
 
 Glad you asked! A loader is something that lets us mess around a little bit with our files before everything is actually rendered on the page. And the few that we're gonna use are specifically going to handle our CSS and transpiling the ES6 that we're about to write into ES5.
 
 With all that being said, let's start actually webpacking something fun!
 
 1. `mkdir webpack-test`
 2. `npm init`
 3. `mkdir src`
 4. `touch src/index.js src/App.js`
 5. `npm install --save-dev webpack@2.2.0`
 6. `npm install --save-dev babel-loader babel-core babel-preset-env`
 7. `touch webpack.config.js`
 8. `touch index.html`
 9. `touch .babelrc`
 11. `npm install --save-dev extract-text-webpack-plugin@2.0.0-beta.4`
 12. `touch build/styles.css`
 
 > Write up your `webpack.config.js` file and your `.babelrc` file and some basic styling
 
 12. `npm run build`
 
## What are the things we just built??

* `.babelrc` is a configuration file that tells `babel` how to transpile our javascript and makes our syntax highlighting lives easier.
* `webpack.config.js` is a configuration file that tells javascript exactly how the output `bundle.js` file should look. This is what tells `webpack` how to compile all of our scripts, plus a whole bunch of `webpack` stuff that abstracts out all of the processes that make webpack magical
* `babel-loader`, `babel-core`, `babel-preset-es2015`, `babel-preset-react` and `babel-preset-env` configure `babel` to transpile into "React" language and highlights properly.
* `extract-text-webpack-plugin` and `css-loader` tell `webpack` to compile all of our CSS

## So What??
Now, we've gotten over the hump of putting React onto a back end. We can now run one port that is serving two sections of the same app; our front-end in React, and our back-end in Node. We've compiled all of our components into one file and ensured correct load times.

## Forms Lab
1. Create a new migration that adds a `donuts` table to your database with columns for `(id, flavor, aftertaste)`
2. Write a model that `create`s an entry in that table
3. Write a controller that leverages that model to `create` a new donut based on data from the request that comes in
4. Define a route to `/donuts` that uses that controller method
5. Write a new React `Form` component that uses axios to send a `POST` request to your `/donuts` route whose data is in state
