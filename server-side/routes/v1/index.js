var { Router} = require('express');

var ArtistCtrl = require('../../controllers/v1/artist.ctrl');
var AlbumCtrl = require('../../controllers/v1/album.ctrl');

var routes = Router();

/* Artist */
routes.get('/artists', ArtistCtrl.Index);
routes.post('/artist/create', ArtistCtrl.New);
routes.put('/artist/update/:id', ArtistCtrl.Update);
routes.delete('/artist/delete/:id', ArtistCtrl.Delete);
routes.get('/artists/search/:query', ArtistCtrl.Search);

/* Album */
routes.get('/albums', AlbumCtrl.Index);
routes.post('/album/create', AlbumCtrl.New);
routes.put('/album/update/:id', AlbumCtrl.Update);
routes.delete('/album/delete/:id', AlbumCtrl.Delete);
routes.get('/albums/search/:query', AlbumCtrl.Search);

module.exports = routes;
