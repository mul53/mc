import React, { Component } from 'react';
import { Icon } from '@mdi/react';
import { mdiSearchWeb, mdiMagnify } from '@mdi/js';

class TopNav extends Component {
  render() {
    return (
      <section className="top-nav">
        <div className="top-nav__container top-nav__container--align-center">
          <div className="top-nav__search">
            <Icon 
              className="top-nav__search__icon"
              path={mdiMagnify}
              size={1.45}
              color="white">
            </Icon>
            <input type="text" className="top-nav__search__input" placeholder="Search music"/>
          </div>
        </div>
        <div className="top-nav__container">
          <nav className="top-nav__menu">
            <a href="" className="top-nav__menu__item">
              artists
            </a>
            <a href="" className="top-nav__menu__item">
              albums
            </a>
            <a href="" className="top-nav__menu__item">
              manage
            </a>
          </nav>
        </div>
      </section>
    )
  }
}

export default TopNav;
