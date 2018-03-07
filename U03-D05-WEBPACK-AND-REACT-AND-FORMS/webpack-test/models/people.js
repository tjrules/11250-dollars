const db = require('../db/config');

class People {
  create(person) {
    return db.one(`INSERT INTO people(username, nickname) VALUES($1, $2) RETURNING *`, [person.username, person.nickname])
  }
}

module.exports = People;
