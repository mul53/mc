var Artist = require('../../models/artist.model');
var Album = require('../../models/album.model');

// TODO: Improve api error handling
// TODO: Use Async/Await
var ArtistCtrl = {
  Index: function(req, res) {
    Artist.find({}, (err, artists) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(artists);
    });
  },

  Show: function(req, res) {
    Artist.findOne({_id: req.params.id}, function(err, artist) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(artist);
    });
  },

  New: function(req, res) {
    var artist = new Artist(req.body);
    artist.save(function(err, persistedArtist) {
      if (err) {
        res.send(err);
      }
      res.status(201).json(persistedArtist);
    });
  },

  Update: function(req, res) {
    var id = req.params.id;
    Artist.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, artist) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(artist);
    });
  },

  Delete: function(req, res) {
    Artist.deleteOne({_id: req.params.id}, function(err) {
      if (err) {
        res.send(err);
      }
      Album.deleteMany({ artist: req.params.id }, function(err) {
        if (err) {
          res.send(err);
        }
        res.status(200).json({ message: 'Artist has been deleted successfully'});
      });
    });
  },

  Search: function(req, res) {
    Artist.find({ name:
      { $regex: new RegExp(req.params.query, 'i') },
    }, function(err, artists) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(artists);
    });
  },
};

module.exports = ArtistCtrl;
