const controllerClass = require('../controllers/people-controller');
const controller = new controllerClass;
const router = require('express').Router();

router.post('/', controller.create);

module.exports = router;
