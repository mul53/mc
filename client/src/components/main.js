import React, { Component } from 'react';
import TopNav from './topNav';
import Content from './content';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <TopNav />
        <Content />
      </div>
    )
  }
}

export default Main;
