\connect cmer

CREATE TABLE IF NOT EXISTS songs (
  id BIGSERIAL PRIMARY KEY,
  artist VARCHAR(255),
  src VARCHAR(255),
  song VARCHAR(255)
);