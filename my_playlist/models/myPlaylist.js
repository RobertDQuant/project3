const db = require('../db/config');

const Playlist = {};

Playlist.findAll = () => {
  return db.query('SELECT * FROM songs');
};

Playlist.findById = id => {
  return db.oneOrNone('SELECT song.artist, song.name, song.id, song.src FROM songs WHERE song.id = $1', [id]);
};

Playlist.create = playlist => {
  return db.one(
    `
      INSERT INTO songs
      (artist, name, src)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [playList.artist, playList.name, playList.src]
  );
};

Playlist.update = (playlist, id) => {
  return db.one(
    `
      UPDATE songs SET
      artist = $1,
      name = $2,
      src = $3
      WHERE id = $4
      RETURNING *
    `,
    [playlist.artist, playlist.name, playlist.src, id]
  );
};

Playlist.destroy = id => {
  return db.none(
    `
      DELETE FROM songs
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Playlist;