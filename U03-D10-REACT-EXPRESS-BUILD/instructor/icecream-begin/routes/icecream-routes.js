const express = require('express');
const icecreamRouter = express.Router();

const icecreamController = require('../controllers/icecream-controller');

icecreamRouter.get('/', icecreamController.index);
icecreamRouter.post('/', icecreamController.create);

icecreamRouter.get('/:id', icecreamController.show);
icecreamRouter.put('/:id', icecreamController.update);
icecreamRouter.delete('/:id', icecreamController.destroy);

module.exports = icecreamRouter;
