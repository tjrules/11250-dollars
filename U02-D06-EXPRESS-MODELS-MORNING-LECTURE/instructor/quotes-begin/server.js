// import express from our dependencies
const express = require('express');
const logger = require('morgan');
// initialize the app
const app = express();

// middlewares
app.use(logger('dev'));

// static files
app.use(express.static('public'));

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;
// tell the app to listen on that particular port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Our index route!
app.get('/', (req, res) => {
  res.send('Hello World')
})

// import our quote routes & tell the app to use them
const quoteRoutes = require('./routes/quote-routes');
app.use('/quotes', quoteRoutes);

// Error handler!
app.use('*', (req, res) => {
  res.status(404).send('not found!');
});
