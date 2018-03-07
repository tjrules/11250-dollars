\c movies_auth_dev

CREATE TABLE IF NOT EXISTS movies (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT
)

ALTER TABLE movies ADD COLUMN director_id INTEGER;
