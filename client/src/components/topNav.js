import React, { Component } from 'react';
import { Icon } from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlekeyPress = this.handlekeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handlekeyPress(e) {
    const { push, currentPath } = this.props;
    const { search } = this.state;

    const encodeParam = str => str.replace(/\s+/g, '+');

    if (e.key === 'Enter') {
      if (/^\/artists/.test(currentPath)) {
        push(`/artists?name=${encodeParam(search)}`);
      };
    }
  }

  render() {
    const { currentPath } = this.props;
    const active = /^\/artists/.test(currentPath) ? 'top-nav__search--active' : '';

    return (
      <section className="top-nav">
        <div className="top-nav__container top-nav__container--align-center">
          <div className={`top-nav__search ${active}`}>
            <Icon
              className="top-nav__search__icon"
              path={mdiMagnify}
              size={1.8}
              color="white"
            />
            <input
              type="text"
              name="search"
              className="top-nav__search__input"
              placeholder="Search music"
              onKeyPress={this.handlekeyPress}
              onChange={this.handleChange}
            />
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

const mapStateToProps = state => ({
  currentPath: state.router.location.pathname,
});

export default connect(mapStateToProps, { push })(TopNav);
