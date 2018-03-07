const db = require('../db/config');

const Quote = {
  // findAll() => {

  // }
  // findAll: () => {

  // }
};

Quote.findAll = () => {
  return db.query('SELECT * FROM quotes');
}


module.exports = Quote;
