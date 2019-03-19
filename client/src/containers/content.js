import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ArtistPage from './artistPage';
import AlbumPage from './albumPage';
import ManagePage from './managePage';

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

class Content extends Component {
  render() {
    return (
      <div style={{
        overflowY: 'auto',
        paddingTop: '30px'
      }}>
        <Switch>
          <Route path="/" exact component={ArtistPage} />
          <Route path='/artists' component={ArtistPage} />
          <Route path='/albums' component={AlbumPage} />
          <Route path='/manage' component={ManagePage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default Content;
