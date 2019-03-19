var chai = require('chai');
var request = require('supertest');
var mongoose = require('mongoose');
var { expect } = chai;

var app = require('../app');
var ArtistFactory = require('./factories/artist.factory');
var ArtistModel = require('../models/artist.model');

mongoose.connect('mongodb://localhost/test');
mongoose.connection
  .on('error', (error) => {
    console.warn('Error : ', error);
  });

afterEach((done) => {
  mongoose.connection.collections.artists.drop(() => {
    done();
  });
});

after((done) => {
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
          })
      })
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
          })
      });
    });
  })
})
