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

myPlaylistController.create = (req, res) => {
  console.log(req);
  Playlist.create({
    src: req.body.src,
    name: req.body.name,
    artist_id: req.body.artist_id,
  })
  .then(song => {
    res.json({message: 'ok', song: song});
  })
  .catch(err => {
    res.status(400).json({message: '400', err});
  });
};

myPlaylistController.edit = (req, res) => {
  Playlist.findById(req.params.id)
    .then(song => {
      console.log(song);
      res.json({
        message: 'ok',
        song: song,
        id: req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

myPlaylistController.update = (req, res) => {
  Playlist.update({
    src: req.body.src,
    name: req.body.name,
    artist_id: req.body.artist_id,
  }, req.params.id)
  .then(song => {
    res.json({message: 'ok', song: song});
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

myPlaylistController.destroy = (req, res) => {
  Playlist.destroy(req.params.id)
    .then(() => {
      res.json({message: 'song deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = myPlaylistController;