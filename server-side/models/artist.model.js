var mongoose = require('mongoose');
var { Schema, model } = mongoose;

var ArtistSchema = Schema({
  name: {
    type: String,
  },

  label: {
    type: String,
  },
});

var ArtistModel = model('Artist', ArtistSchema);

module.exports = ArtistModel;
