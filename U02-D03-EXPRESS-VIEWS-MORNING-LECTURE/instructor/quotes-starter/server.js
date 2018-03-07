// import dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const quotesData = require('./db/quotes-data.js')
// console.log(quotesData)
// initialize the app
const app = express();

// static files
app.use(express.static('public'));

// set our default templating engine..embeddedJS
app.set('view engine', 'ejs');
// where to look for view templates
app.set('views', path.join(__dirname, 'views'))

// configure the port
const port = process.env.PORT || 4000;
// tell the app to listen on the above port
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// if you ever get the below error then you have
// another server running on that port..duh...
// Error: listen EADDRINUSE :::4000

// our default index route
app.get('/', (req,res) => {
  // if there is no index.html file in public then
  // res.render will run
  // lets render an ejs template
  res.render('index.ejs', {
    data:' thank you for understanding templates...:} ',
    title:'Welcome to the fantastic world of ESJ...your gonna love it..promise...love it...',
  })
})

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.get('/quotes', (req,res) => {
  res.send(quotesData[1].content)
})

// nodemon server.js "nodemon"
