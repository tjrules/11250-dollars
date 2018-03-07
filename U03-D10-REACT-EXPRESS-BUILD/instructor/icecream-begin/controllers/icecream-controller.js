const Icecream = require('../models/icecream');

const icecreamController = {};

icecreamController.index = (req, res) => {
  Icecream.findAll()
    .then(icecreams => {
      res.json({
        message: 'ok',
        data: icecreams,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

icecreamController.show = (req, res) => {
  Icecream.findById(req.params.id)
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

icecreamController.create = (req, res) => {
  Icecream.create({
    flavor: req.body.flavor,
    description: req.body.description,
    rating: req.body.rating,
    url: req.body.url,
  })
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

icecreamController.update = (req, res) => {
  Icecream.update(
    {
      flavor: req.body.flavor,
      description: req.body.description,
      rating: req.body.rating,
      url: req.body.url,
    },
    req.params.id,
  )
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

icecreamController.destroy = (req, res) => {
  Icecream.destroy(req.params.id)
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = icecreamController;
