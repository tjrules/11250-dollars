\c quotes_dev;

CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  content TEXT,
  author VARCHAR(255),
  genre VARCHAR(255)
);
