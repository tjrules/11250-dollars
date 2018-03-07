\c peopledb

DROP TABLE IF EXISTS people;

CREATE TABLE people(
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR,
  nickname VARCHAR
);
