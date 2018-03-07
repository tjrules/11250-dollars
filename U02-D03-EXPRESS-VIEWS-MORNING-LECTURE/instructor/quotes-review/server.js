// make sure that we also use npm init
// import dependencies
const express = require('express');
//console.log(express)
// morgan is a console logger
const morgan = require('morgan');
// import the path module
const path = require('path');
// import the data
const quotesData = require('./db/quotes-data.js')
// initialize app
const app = express();
// set our static files
app.use(express.static('public'))
// set our default templating engine
app.set('view engine', 'ejs');
// where to look for view templates
app.set('views', path.join(__dirname, 'views'))
console.log(app)
// set up port and listen
const PORT = process.env.PORT || 3000
// console.log(process.env)
app.listen(PORT, (req,res) => {
  console.log(`Listening on port ${PORT}`);
})
// set up logger middleware
app.use(morgan('dev'))
// index route

// app => instance of express
// .get() => is an HTTP request method
// '/quotes' => path or the route
// (req,res) => {} => handler..aka..the callback
app.get('/', (req,res) => {
  console.log(quotesData)
  res.render('quotes', {
    data:quotesData
  })
  // JSON.stringify() / JSON.parse()
})
// importing the quote-routes.js file and functionality
const quoteRoutes = require('./routes/quote-routes')
app.use('/quotes', quoteRoutes)

// default error response for all other route requests that 
// don't have a corresponding route on our end
app.get('*', (req,res) => {
  res.status(404).send("It ain't here buddy")
})









