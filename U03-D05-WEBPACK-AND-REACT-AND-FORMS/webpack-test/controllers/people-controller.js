const peopleClass = require('../models/people');
const People = new peopleClass;

class PeopleController {
  create(req, res) {
    People.create({
      username: req.body.username,
      nickname: req.body.nickname
    })
    .then( person => {
      res.json(person)
    })
    .catch( err => {
      console.log('NOPE YOU F@#$@#$ED UP', err);
      res.status(500).json(err)
    })
  }
}
module.exports = PeopleController;
