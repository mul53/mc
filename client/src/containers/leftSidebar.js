import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiPlayCircle,
  mdiBookmarkMusic,
  mdiAccount,
  mdiRadioTower,
} from '@mdi/js';
import { Link } from 'react-router-dom';

class LeftSidebar extends Component {
  render() {
    return (
      <div className="left-sidebar">

        <div className="left-sidebar__user">
          <div className="left-sidebar__user__profile-pic">
            <div className="left-sidebar__user__profile-pic__wrapper">
              <Icon
                className="icon"
                path={mdiAccount}
                size={1.7}
                color="#262626"
              />
            </div>
          </div>
          <div className="left-sidebar__user__username">
            @Susan
          </div>
        </div>

        <nav className="left-sidebar__menu">
          <Link to="/artists" className="left-sidebar__menu__item">
            <Icon
              className="icon"
              path={mdiPlayCircle}
              size={1.7}
              color="white"
            />
            {' '}
Browse
          </Link>
          <div href="" className="left-sidebar__menu__item left-sidebar__menu__item--disabled" disabled>
            <Icon
              className="icon"
              path={mdiRadioTower}
              size={1.7}
              color="white"
            />
            {' '}
Radio
          </div>
          <div href="" className="left-sidebar__menu__item left-sidebar__menu__item--disabled" disabled>
            <Icon
              className="icon"
              path={mdiAccount}
              size={1.7}
              color="white"
            />
            {' '}
Friends
          </div>
          <div href="" className="left-sidebar__menu__item left-sidebar__menu__item--disabled" disabled>
            <Icon
              className="icon"
              path={mdiBookmarkMusic}
              size={1.7}
              color="white"
            />
            {' '}
Playlists
          </div>
        </nav>

      </div>
    );
  }
}

export default LeftSidebar;
