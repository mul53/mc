import React, { Component } from 'react';
import { Icon } from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { NavLink } from 'react-router-dom';

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
              color="white"
            />
            <input type="text" className="top-nav__search__input" placeholder="Search music" />
          </div>
        </div>
        <div className="top-nav__container">
          <nav className="top-nav__menu">
            <NavLink className="top-nav__menu__item" to="/artists" activeClassName="top-nav__menu__item--active">
              artists
            </NavLink>
            <NavLink className="top-nav__menu__item" to="/albums" activeClassName="top-nav__menu__item--active">
              albums
            </NavLink>
            <NavLink className="top-nav__menu__item" to="/manage" activeClassName="top-nav__menu__item--active">
              manage
            </NavLink>
          </nav>
        </div>
      </section>
    );
  }
}

export default TopNav;
