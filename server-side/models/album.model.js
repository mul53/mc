var mongoose = require('mongoose');
var { model, Schema } = mongoose;

var AlbumSchema = Schema({
  title: {
    type: String,
  },

  year: {
    type: Number,
  },

  artist: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Artist',
  },
});

var AlbumModel = model('Album', AlbumSchema);

module.exports = AlbumModel;
