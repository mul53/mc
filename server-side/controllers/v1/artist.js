var Artist = require('../../models/artist');

var ArtistCtrl = {

  Index: function(req, res) {
    Artist.find({}, (err, artists) => {
      if (err) {
        res.send(err);
      }
      res.json({ status: true, artists });
    });
  },

  New: function(req, res) {
    var artist = new Artist(req.body);
    artist.save(function(err, artist) {
      if (err) {
        res.send(err);
      }
      res.status(201).json(artist);
    });
  },

  Update: function(req, res) {
    var id = req.params.id;
    Artist.findByIdAndUpdate(id, req.body, {new: true}, function(err, artist) {
      if (err) {
        res.send(err);
      }
      res.status(200).json(artist);
    });
  },

  Delete: function(req, res) {
    Artist.remove({_id: req.params.id}, function(err) {
      if (err) {
        res.send(err);
      }
      res.status(200).json({ message: 'Artist has been deleted successfully'});
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
}

module.exports = ArtistCtrl;
