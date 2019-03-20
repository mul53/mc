import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import GradPic from '../components/gradPic';
import { blueButton, redButton } from '../util/styles';
import { getAlbum as getAlbumAction, deleteAlbum as deleteAlbumAction } from '../actions/albumActions';

const styles = () => ({
  redButton,
  blueButton,
});

class ManagePageAlbum extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { getAlbum, match } = this.props;
    const { albumId } = match.params;
    getAlbum(albumId);
  }

  handleDelete() {
    const { deleteAlbum, match, history } = this.props;
    const { albumId } = match.params;
    deleteAlbum(history, albumId);
  }

  render() {
    const { album, match, classes } = this.props;
    const { albumId } = match.params;
    return (
      <div>
        <div className="container">
          <header className="manage-artist__header">
            <div className="manage-artist__header__left">
              <GradPic width="160px" height="160px" />
              <section>
                { album
                && (
                  <span>
                    <span className="name">{ album.title }</span>
                    <br />
                    <br />
                    { album.year }
                  </span>
                )}
              </section>
            </div>
            <div className="manage-artist__header__right">
              <Link to={`/manage/album/${albumId}/edit`}>
                <Button className={classes.blueButton}>Edit Album</Button>
              </Link>
              <Button className={classes.redButton} onClick={this.handleDelete}>Delete Album</Button>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  album: state.albumStore.show,
});

const mapDispatchToProps = dispatch => ({
  getAlbum(id) {
    return dispatch(getAlbumAction(id));
  },
  deleteAlbum(history, id) {
    return dispatch(deleteAlbumAction(history, id));
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManagePageAlbum));
