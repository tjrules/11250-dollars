// instantiate all the things
// import all the stuff
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 3000;

//configure morgan to use the 'dev' configuration
//that allows us to see response statuses
app.use(morgan('dev'));

//configure app.js to use EJS on the front end
//also configures app.js to use the views folder to look for views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routing stuff
//since we're in app.js, the route that this instance of app.get() is looking for is
//localhost:3000, which means it's our index route aka our landing page.
app.get('/', (req, res) => {
  //sending along just a random string of text
  //once this gets built out, this will render some sort of landing page
  res.send('we are live and on the air yaaaaay');
});

//this transfers responsibility to ./routes/puns-routes when the server receives a request for
//localhost:3000/puns. open up that file next to see the next step of logic in this request cycle.
app.use('/puns', require('./routes/puns-routes'))

app.listen(PORT, () => {
  console.log(`live on port ${PORT}`)
})
