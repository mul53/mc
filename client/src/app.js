import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import LeftSidebar from './containers/leftSidebar';
import Main from './containers/main';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <LeftSidebar />
        <Main />
      </div>
    );
  }
}

export default hot(module)(App);
