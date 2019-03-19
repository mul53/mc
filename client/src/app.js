import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import LeftSidebar from './components/leftSidebar';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <LeftSidebar />
      </div>
    )
  }
}

export default hot(module)(App);