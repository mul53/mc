import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import GradPic from '../components/gradPic';
import Card from '../components/card';
import { blueButton, redButton } from '../util/styles';
import { getArtist as getArtistAction, deleteArtist as deleteArtistAction } from '../actions/artistActions';

const styles = () => ({
  redButton,
  blueButton,
});

class ManagePageArtist extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { getArtist, match } = this.props;
    const { artistId } = match.params;
    getArtist(artistId);
  }

  handleDelete() {
    const { deleteArtist, match, history } = this.props;
    const { artistId } = match.params;
    deleteArtist(history, artistId);
  }

  render() {
    const { artist, match, classes } = this.props;
    const { artistId } = match.params;
    return (
      <div>
        <div className="container">
          <header className="manage-artist__header">
            <div className="manage-artist__header__left">
              <GradPic width="160px" height="160px" />
              <section>
                { artist
                && (
                  <span>
                    <span className="name">{ artist.name }</span>
                    <br />
                    { artist.label }
                  </span>
                )}
              </section>
            </div>
            <div className="manage-artist__header__right">
              <Link to={`/manage/${artistId}/album/add`}>
                <Button className={classes.blueButton}>Add Album</Button>
              </Link>
              <Link to={`/manage/${artistId}/edit`}>
                <Button className={classes.blueButton}>Edit Artist</Button>
              </Link>
              <Button className={classes.redButton} onClick={this.handleDelete}>Delete Artist</Button>
            </div>
          </header>

          <div className="manage-artist__albums">
            <div className="row">
              { artist.albums && artist.albums.map(({ title, year, _id }) => (
                <div key={_id} className="col-md-3">
                  <Link to={`/manage/album/${_id}`}>
                    <Card styles={{ margin: '0px' }} title={title} subTitle={year} />
                  </Link>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artistStore.show,
});

const mapDispatchToProps = dispatch => ({
  getArtist(id) {
    return dispatch(getArtistAction(id));
  },
  deleteArtist(history, id) {
    return dispatch(deleteArtistAction(history, id));
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManagePageArtist));
