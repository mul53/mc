var { Router} = require('express');
var ArtistCtrl = require('../../controllers/v1/artist.ctrl');

var routes = Router();

routes.get('/artists', ArtistCtrl.Index);
routes.post('/artist/create', ArtistCtrl.New);
routes.put('/artist/update/:id', ArtistCtrl.Update);
routes.delete('/artist/delete/:id', ArtistCtrl.Delete);
routes.get('/artists/search/:query', ArtistCtrl.Search);

module.exports = routes;
