// instantiate a router that will begin listening for routes
// also brings in the data dump that we're using.
const router = require('express').Router();
const puns = require('../puns.json');
const controller = require('../controllers/puns');


//==================================================
// now that we've been passed responsibility from app.js
// we now know that our base url is localhost:3000/puns
// this is because this file only receives control of the app
// AFTER a request comes in for /puns
// so that means that any add-ons that are listed here
// are tacked onto /puns
//==================================================


//this first route is listening for ONLY localhost:3000/puns.
//and once we hit that route, pass responsibility again to
//the controller that we've required at the top of this file.
//once responsibility is passed to the controller
//apply whatever (req, res) logic that is attached to the index method.
router.get('/', controller.index);

//this next route is now listening for a parameter that will be passed
//and we're assuming this parameter is an ID that is attached to a pun.
//this route will look something like localhost:3000/puns/someNumberHere.
//that someNumberHere will then be used to lock down one specific pun.
router.get('/:id',controller.show);


//==================================================
//we've broken down exactly what this router does.
//all it does is play middleman between the user and the controller.
//it directs traffic based on the requested url.
//it doesn't know what happens once someone hits a route
//only that someone hit a route, and then it passes responsibility to the controller
//look at the controller file for the next step in this request cycle.
//==================================================

module.exports = router;
