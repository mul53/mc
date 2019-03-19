var Album = require('../../models/album.model');

// TODO: Api error handling

var AlbumCtrl = {
  Index: function(req, res) {
    Album.find({}, function(err, albums) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(albums);
    });
  },

  New: function(req, res) {
    var album = new Album(req.body);
    album.save(function(err, persistedAlbum) {
      if (err) {
        res.send(err);
      }
      res.status(201).json(persistedAlbum);
    });
  },

  Update: function(req, res) {
    Album.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, album) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(album);
    });
  },

  Delete: function(req, res) {
    Album.deleteOne({_id: req.params.id}, function(err) {
      if (err) {
        res.send(err);
      }
      res.status(200).json({ message: 'Album has been deleted successfully' });
    });
  },

  Search: function(req, res) {
    Album.find({ title:
      { $regex: new RegExp(req.params.query, 'i') },
    }, function(err, albums) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(albums);
    });
  },
};

module.exports = AlbumCtrl;