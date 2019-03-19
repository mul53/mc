import React, { Component } from 'react';
import Card from './card';

class Content extends Component {
  render() {
    return (
      <div style={{
        overflowY: 'auto',
        paddingTop: '30px'
      }}>
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
      </div>
    )
  }
}

export default Content;
