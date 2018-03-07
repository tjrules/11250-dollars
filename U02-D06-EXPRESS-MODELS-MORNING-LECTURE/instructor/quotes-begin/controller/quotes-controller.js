const Quote = require('../models/quote');

const quotesController = {};

quotesController.index = (req,res) => {
  Quote.findAll()
    .then(quotes => {
      res.json({
        message:'ok',
        data:quotes,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
}

module.exports = quotesController;
