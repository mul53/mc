var mongoose = require('mongoose');
var { Schema, model } = mongoose;

mongoose.Promise = global.Promise;

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
