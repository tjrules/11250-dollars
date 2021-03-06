const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('hello world');
});

const icecreamRoutes = require('./routes/icecream-routes');
app.use('/icecream', icecreamRoutes);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});
