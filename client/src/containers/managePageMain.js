import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Card from '../components/card';
import { blueButton } from '../util/styles';
import { getArtists } from '../actions/artistActions';

const styles = () => ({
  blueButton,
});

class ManagePageMain extends Component {
  componentDidMount() {
    const { getAllArtists } = this.props;
    getAllArtists();
  }

  render() {
    const { classes, artists } = this.props;
    return (
      <div className="manage-main">
        <div className="container">
          <div className="manage-main__controls">
            <Link to="/manage/artist/add">
              <Button className={classes.blueButton}>
                Add Artist
              </Button>
            </Link>
          </div>
          <div className="row">
            { artists.map(({ name, label, _id }) => (
              <div className="col-md-3">
                <Link to={`/manage/${_id}`}>
                  <Card title={name} subTitle={label} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  artists: state.artistStore.all,
  loading: state.artistStore.loading,
  error: state.artistStore.error,
});

const mapDispatchToProps = dispatch => ({
  getAllArtists() {
    return dispatch(getArtists());
  },
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ManagePageMain));
