const express = require('express');
const quotesData = require('../db/quotes-data.js');
// what is .Router() returning? ... you guessed it...an OBJECT
const quoteRoutes = express.Router();
// '/' is really '/quotes'
// app.use('/quotes', quoteRoutes) // this doesn't belong here
// quoteRoutes.get('/', (req,res) => {
//   res.json({
//     message:'ok',
//     data: quotesData
//   })
// })

// quoteRoutes.post('/', (req,res) => {
//   res.json({
//     message:'ok',
//     data: quotesData
//   })
// })

quoteRoutes.route('/')
  .get((req,res) => {
    res.render('index', {
    data:quotesData,
    title:"all about ejs"
  })
  // res.json({
  //   message:'ok',
  //   data: quotesData
  // })
}).post((req,res) => {
  // grab the content and add to DB
  quotesData.push({
    content: 'I like to win...always....',
    author: 'Joe...the most amazing instructor',
    id: '34',
    genre_type: 'motivational',
  })
  console.log(quotesData)
}).delete((req,res) => {
  quotesData.pop()
})

// the : means that it's expecting a parameter
// and captures that value and places it in the params obj
quoteRoutes.get('/:id', (req,res) => {
  //res.send(req.params)
  const requestedQuote = quotesData.filter(quote => {
    return quote.id.toLowerCase() == req.params.id.toLowerCase()
  })
  console.log('res.send ran already')
  //res.redirect('/quotes/req.params.id')
  res.json({
    message:'ok',
    data:requestedQuote
  })
})

// quoteRoutes.post();
// quoteRoutes.delete()
// quotesRoutes.put()

// this exports so that the file doing the import can use 
// all the functionality that was exported
module.exports = quoteRoutes;
