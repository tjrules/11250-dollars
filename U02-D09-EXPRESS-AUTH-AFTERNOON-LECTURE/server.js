const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config(); 

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.use(session({
  secret: process.env.SESSION_KEY, // session secret
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize()); // <-- Registers the Passport middleware.
app.use(passport.session()); // persistent login sessions

const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const authHelpers = require('./services/auth/auth-helpers');
app.use(authHelpers.loginRequired)


// middleware
app.use(methodOverride('_method'))
//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const PORT = process.env.PORT || 3001;

// configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// console.log("this is __dirname; ", __dirname)

app.get('/', (req,res) => {
  res.send('hello my young budding developers in the making...')
})

// all routes need to be placed before the * route
const moviesRouter = require('./routes/movies-routes');
app.use('/movies', moviesRouter);

app.get('*', (req,res) => {
  res.status(404).send('not sure what your looking but it aint there')
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})


