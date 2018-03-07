const db = require('../db/config');

const Icecream = {};

Icecream.findAll = () => {
  return db.query(`SELECT * FROM icecream`);
};

Icecream.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM icecream
    WHERE id = $1
  `,
    [id]
  );
};

Icecream.create = icecream => {
  return db.one(
    `
    INSERT INTO icecream
    (flavor, description, rating, url)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [icecream.flavor, icecream.description, icecream.rating, icecream.url]
  );
};

Icecream.update = (icecream, id) => {
  return db.one(
    `
    UPDATE icecream SET
      flavor = $1,
      description = $2,
      rating = $3,
      url = $4
    WHERE id = $5
    RETURNING *
  `,
    [icecream.flavor, icecream.description, icecream.rating, icecream.url, id]
  );
};

Icecream.destroy = id => {
  return db.none(
    `
    DELETE FROM icecream
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Icecream;
