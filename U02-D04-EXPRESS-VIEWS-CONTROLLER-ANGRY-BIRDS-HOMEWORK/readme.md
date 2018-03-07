# Node Reps! With Disgruntled Avians.

![](https://media.giphy.com/media/fKACOQcJ6LnTa/giphy.gif)

## Setup

Some data has been provided for you in a json file.

## Assignment

#### Part 0 - Before You Start - Think about how you style your code.

* Quite possibly the most important thing you'll need to do as a programmer is write clean, styled code. It doesn't need to work perfectly, or at all, because if you have clean code, then you can easily work with others to resolve your functional issues and others can easily read through your code to provide feedback.
* Below will be links to style guides.  Skim through and update your weekend's hw to be stylistically "on fleek".
* A few things to focus on - proper indentation (possibly the most important), comments, declaration of variables
* As a reminder, we use the [AirBnB Styleguide](https://github.com/airbnb/javascript). We're all capable of improving our style - on one cursory glance through I saw at least three things I do poorly and can improve on.



#### Part 1 - Express with Data

* Now we're going to build an express app that can handle data
* Create a new directory called `angry-birds`, with a file called `index.js` and any other files you may need for the below (e.g views).
* In the `index.js` file, require all modules you need and invoke them as necessary.
* Ensure that your server is listening for a port - have it log 'Listening on Port PORTNUMBER'  
* Read the angry_birds.json file and save that array to a variable that will act like a database
* Write three GET routes: `/`, `/angry-birds` and `/angry-birds/:id`:
* `/` should **render** a home page with a link to '/angry-birds' 
* `/angry-birds` should **render** a view of ALL angry birds. This view should have each bird's name, ability, image, and group visible on the page, as well as a link to `/angry-birds/BIRDS_ID`. There should also be a link back to `/`. And each bird's name should also serve as a link to that bird's specific ID page. 
* `/angry-birds/:id` should **render** a view of JUST the angry bird with the matching ID. This should have the bird's name, ability, image, and group visible on the page, as well as links back to `/` and `/angry-birds`
* How would you access the id when visiting `/angry-birds/4`? 

#### Part 2 - Filtering

* I think there are some data entries that shouldn't be in there... how might we use `.filter()` to get them out of there?
* The `/angry-birds` page should render all of these birds' names and images.

#### BONUS - Organizing

* Time to clean up our visuals - start by creating a public directory inside our angry birds directory, a css directory inside that, and any style files you may need inside there (Remember the `app.use(express.static('public'))` stuff? How did we use that to house our CSS files? After that, how did we link it to our EJS files?)
* The home page is pretty bare, let's css and custom animations to make it look nicer.
* Let's make our `/angry-birds'` page look more organized, like [Pinterest](https://cdn.shopify.com/s/files/1/0070/7032/files/pinterest-marketing.png?6545).
* Each bird should have their own card section
* Each birds individual page, found at `/angry-birds/BIRDS_ID` also doesn't have much on it. Organize all the information into a card.


## Deliverables
* A link to your repo
* Your file structure should have a `controller` directory (with a `birds.js` file that handles all of our `(req, res)` stuff, a `router` directory with a `bird-router.js` file that houses the necessary routes, and an `app.js` file that serves as our entry point to our app.


# Homework is due Tonight (12/18) night at 11:00PM, Good Luck!




