const Playlist = require('../models/myPlaylist');

const myPlaylistController = {};

myPlaylistController.index = (req, res) => {
  Playlist.findAll()
    .then(songs => {
      res.json({ message: 'ok',
        songsData: songs,
      });
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};

myPlaylistController.show = (req, res) => {
  Playlist.findById(req.params.id)
    .then(song => {
      res.json({
        message: 'ok',
        song: song,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};