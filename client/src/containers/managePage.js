import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ManagePageMain from './managePageMain';
import ManagePageArtist from './managePageArtist';
import ManagePageArtistEdit from './managePageArtistEdit';
import ManagePageArtistAdd from './managePageArtistAdd';
import ManagePageAlbumAdd from './managePageAlbumAdd';
import ManagePageAlbum from './managePageAlbum';
import ManagePageAlbumEdit from './managePageAlbumEdit';

class ManagePage extends Component {
  render() {
    return (
      <div>
        <Route exact path="/manage/" component={ManagePageMain} />
        <Route exact path="/manage/:artistId" component={ManagePageArtist} />
        <Route exact path="/manage/:artistId/edit" component={ManagePageArtistEdit} />
        <Route exact path="/manage/:artistId/album/add" component={ManagePageAlbumAdd} />
        <Route exact path="/manage/artist/add" component={ManagePageArtistAdd} />
        <Route exact path="/manage/album/:albumId" component={ManagePageAlbum} />
        <Route exact path="/manage/album/:albumId/edit" component={ManagePageAlbumEdit} />
      </div>
    );
  }
}

export default ManagePage;
