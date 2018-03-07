# Welcome to Node and Express!!

![hackerman](https://media.giphy.com/media/VHHxxFAeLaYzS/giphy.gif)

We're now fullstack developers!! Whaaaat?! We now know how to make a baby server! Yay! 

## What are we doing tonight?

Tonight, we'll be writing up a server and serving up some `json` data to our clients. For now, we're taking baby steps to ramp up to building out fully functioning and robust servers. 

Tonight, write up your `app.js` file to start listening on `port 8080`, and then set up your server to listen for two routes: 

* `/puns`
* `/puns/:id`

Requests to `/puns` should send back the entire array of puns from your `puns.js` file. Requests to `/puns/:id` should send along the specific pun attached to the ID that you've passed as a parameter.

> Protip: You should be testing your routes using `res.send('some text')` before you attempt to send along data. Test every little step as you go so that you don't have a whole bunch of debugging to do because you realized you messed up step 1 while you're on step (not 1)!!!


## Starter Code

All you get is this readme and the amazing `puns.js` file that your wonderful IA wrote. The rest is up to you!!

## Day 2 Stuff

Write up two EJS views to be rendered. Your app should render an `index.ejs` file on `/puns` with the entire puns array sent along as data, and a `show.ejs` file on `/puns/:id` with the single pun as data.

> Jumping point for your `show.ejs` file: You've got the logic for locking down a single pun based on its ID. How might you use that logic to tell your app to send THAT specific pun?

Your `index.ejs` file should loop over the array of the puns and put each pun and set of keywords onscreen. Your `show.ejs` file should show the set of keywords and the actual pun onscreen.

## Bonus
Style the MESS out of this!
