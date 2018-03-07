const controller = {};
const puns = require('../puns.json');

//===================================================
//as far as we've gotten,
//this is the last stop on the request train.
//once we get into models this won't be the last stop, but for this exercise it is.
//at this point, we've received a request from the user to localhost:3000/puns
//a request that was passed to our router from app.js since we've configured it to give control to the router
//if any requests come in for /puns.
//our router heard either localhost:3000/puns or localhost:3000/puns/someNumberHere.
//now we're going to go into the (req, res) logic that happens with each request.
//===================================================

//this is the method that is called from our router when we receive a request to localhost:3000/puns.
//requests to this route should come back with the entire list of puns.
controller.index = (req, res) => {
  //all we're doing is sending along a JSON object full of the stuff from our data dump. All of it.
  res.json(puns);
}

//this is the method that is called from our router when we receive a request to localhost:3000/puns/someNumberHere.
//this route should only give me back one thing instead of our entire dataset.
//in this, someNumberHere is tied to the specific pun we want.
controller.show = (req, res) => {
  //since we don't have a model or a database, we're simulating a specific query by filtering our dataset for something specific.
  let onePun = puns.puns.filter(pun => {
    //every request comes with parameters. in this case, req.params.id is the someNumberHere that we have in our url. we can use that number here
    //as a way of locking down a specific thing in our dataset.
    return pun.id == req.params.id;
  })
  //now all that's left is to send along a JSON representation of the first instance of the array (since .filter() returns an array, even if it's only one thing).
  res.json(onePun[0])
}
//===================================================
//we are by no means done with this app.
//we have no views, even though we're configured to make them.
//we also have no database outside of just a data dump JSON file.
//we have only one resource (puns)
//we have no models
//but we have a start for the back end functionality of this app.
//this particular file will get bigger and more complicated as we get through database stuff.
//but fear not, this is a start.
//===================================================
