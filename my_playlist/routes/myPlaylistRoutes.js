const express = require('express');
const myPlaylistController = require('../controllers/myPlaylistController');

const myPlaylistRoutes = express.Router();

myPlaylistRoutes.get('/', myPlaylistController.index);
myPlaylistRoutes.get('/:id', myPlaylistController.show);
myPlaylistRoutes.post('/', myPlaylistController.create);
myPlaylistRoutes.put('/:id', myPlaylistController.update);
myPlaylistRoutes.delete('/:id', myPlaylistController.destroy);

module.exports = myPlaylistRoutes;
