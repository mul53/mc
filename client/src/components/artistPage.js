import React, { Component } from 'react';

import Card from './card';

class ArtistPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Card title="Views" subTitle="2013"/>
          </div>
          <div className="col-md-3">
            <Card title="Views" subTitle="2013"/>
          </div>
          <div className="col-md-3">
            <Card title="Views" subTitle="2013"/>
          </div>
          <div className="col-md-3">
            <Card title="Views" subTitle="2013"/>
          </div>
          <div className="col-md-3">
            <Card title="Views" subTitle="2013"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistPage;