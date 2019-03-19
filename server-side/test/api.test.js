var chai = require('chai');
var request = require('supertest');
var mongoose = require('mongoose');
var { expect } = chai;

var app = require('../app');

/* Artist Test Helpers */
var ArtistFactory = require('./factories/artist.factory');
var ArtistModel = require('../models/artist.model');

/* Album Test Helpers */
var AlbumFactory = require('./factories/album.factory');
var AlbumModel = require('../models/album.model');

mongoose.connect('mongodb://localhost/test');
mongoose.connection
  .on('error', function(error) {
    console.warn('Error : ', error);
  });

afterEach(function(done) {
  for (var collection in mongoose.connection.collections) {
    mongoose.connection.collections[collection].remove(function() {});
  }
  return done();
});

after(function(done) {
  mongoose.disconnect(done);
});


describe('api', function() {
  describe('v1', function() {
    describe('Get /artists', function() {
      it('should respond with json', function(done) {
        request(app)
          .get('/api/v1/artists')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });

    describe('Post /artist/create', function() {
      it('should respond with 201 and json', function(done) {
        var data = { name: 'Artist', label: 'Music Label' };

        request(app)
          .post('/api/v1/artist/create')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.name).to.eql(data.name);
            expect(res.body.label).to.eql(data.label);

            return done();
          });
      });
    });

    describe('Update /artist/update/:id', function() {
      before(function(done) {
        ArtistModel.create(ArtistFactory).then(() => done());
      });

      it('should update artist and respond with 200', function(done) {
        var data = { name: 'New Name' };

        request(app)
          .put(`/api/v1/artist/update/${ArtistFactory._id}`)
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.name).to.eql(data.name);

            return done();
          });
      });
    });

    describe('DELETE /artist/delete/:id', function() {
      describe('with albums', function() {
        before(function(done) {
          ArtistModel.create(ArtistFactory).then(() => {
            AlbumModel.create(AlbumFactory).then(() => done());
          });
        });

        it('should delete artist with albums and respond with 200', function(done) {
          request(app)
            .delete(`/api/v1/artist/delete/${ArtistFactory._id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(async function(err, res) {
              if (err) {
                return done(err);
              }

              var albums = await AlbumModel.find({ artist: ArtistFactory._id });

              expect(albums.length).to.eql(0);
              expect(res.body.message).to.eql('Artist has been deleted successfully');

              return done();
            });
        });
      });

      describe('without albums', function() {
        before(function(done) {
          ArtistModel.create(ArtistFactory).then(() => done());
        });

        it('should delete artist and respond with 200', function(done) {
          request(app)
            .delete(`/api/v1/artist/delete/${ArtistFactory._id}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
              if (err) {
                return done(err);
              }

              expect(res.body.message).to.eql('Artist has been deleted successfully');

              return done();
            });
        });
      });
    });

    describe('GET /artists/search/:query', function() {
      before(function(done) {
        ArtistModel.create(ArtistFactory).then(() => done());
      });

      it('should return artists who match query and respond with 200', function(done) {
        request(app)
          .get('/api/v1/artists/search/j')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.length).to.eql(1);

            return done();
          });
      });
    });

    describe('GET /albums', function() {
      it('should return all albums and respond with 200', function(done) {
        request(app)
          .get('/api/v1/albums')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.length).to.eql(0);

            return done();
          });
      });
    });

    describe('Post /album/create', function() {
      it('should respond with 201 and json', function(done) {
        var data = AlbumFactory;

        request(app)
          .post('/api/v1/album/create')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.title).to.eql(data.title);
            expect(res.body.year).to.eql(data.year);
            expect(res.body.artist).to.eql(data.artist);

            return done();
          });
      });
    });

    describe('Update /album/update/:id', function() {
      before(function(done) {
        AlbumModel.create(AlbumFactory).then(() => done());
      });

      it('should update album and respond with 200', function(done) {
        var data = { title: 'New Name' };

        request(app)
          .put(`/api/v1/album/update/${AlbumFactory._id}`)
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.title).to.eql(data.title);

            return done();
          });
      });
    });

    describe('DELETE /album/delete/:id', function() {
      before(function(done) {
        AlbumModel.create(AlbumFactory).then(() => done());
      });

      it('should delete album and respond with 200', function(done) {
        request(app)
          .delete(`/api/v1/album/delete/${AlbumFactory._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.message).to.eql('Album has been deleted successfully');

            return done();
          });
      });
    });

    describe('GET /albums/search/:query', function() {
      before(function(done) {
        AlbumModel.create(AlbumFactory).then(() => done());
      });

      it('should return albums who match query and respond with 200', function(done) {
        request(app)
          .get('/api/v1/albums/search/imagine')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) {
              return done(err);
            }

            expect(res.body.length).to.eql(1);

            return done();
          });
      });
    });
  });

  describe('GET /album/:id', function() {
    before(function(done) {
      AlbumModel.create(AlbumFactory).then(() => {
        ArtistModel.create(ArtistFactory).then(() => done());
      });
    });

    it('should return album which matches id with artist data and respond with 200', function(done) {
      request(app)
        .get(`/api/v1/album/${AlbumFactory._id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }

          expect(res.body.title).to.eql(AlbumFactory.title);
          expect(res.body.artist.name).to.eql(ArtistFactory.name);

          return done();
        });
    });
  });

  describe('GET /artist/:id', function() {
    before(function(done) {
      ArtistModel.create(ArtistFactory).then(() => done());
    });

    it('should return artist which matches id and respond with 200', function(done) {
      request(app)
        .get(`/api/v1/artist/${ArtistFactory._id}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }

          expect(res.body.name).to.eql(ArtistFactory.name);

          return done();
        });
    });
  });
});
