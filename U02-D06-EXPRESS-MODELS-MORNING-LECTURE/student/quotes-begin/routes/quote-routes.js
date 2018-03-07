const express = require('express');
const quoteRoutes = express.Router();

// quotes route!
const quotes = require('../db/quotes-info');
quoteRoutes.get('/', (req, res) => {
  res.json({
    message: 'ok',
    quotes: quotes,
  });
});

// get quotes by id
quoteRoutes.get('/:id', (req, res) => {
  console.log(req.params.id);
  const requestedQuote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  });
  console.log(requestedQuote);
  res.json({
    message: 'ok',
    quote: requestedQuote[0],
  });
});

module.exports = quoteRoutes;