import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../components/card';
import { getAlbums as getAlbumsAction } from '../actions/albumActions';
import Loader from '../components/loading';
import ErrorView from '../components/error';
import CenterWrapper from '../components/centerWrapper';

class AlbumPage extends Component {
  componentDidMount() {
    const { getAlbums } = this.props;
    getAlbums();
  }

  render() {
    const { albums, error, loading } = this.props;

    if (loading) {
      return (
        <Loader />
      );
    }

    if (error) {
      return (
        <ErrorView message={error} />
      );
    }

    if (!albums.length) {
      return (
        <CenterWrapper
          style={{
            color: '#686868',
          }}
        >
          Currently no Albums.
        </CenterWrapper>
      );
    }

    return (
      <div className="container">
        <div className="row">
          { albums.map(({ title, year, _id }) => (
            <Link to={`/manage/album/${_id}`}>
                <div key={_id} className="col-md-3">
                  <Card title={title} subTitle={year} />
                </div>
            </Link>
          )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albumStore.all,
  loading: state.albumStore.loading,
  error: state.albumStore.error,
});

const mapDispatchToProps = dispatch => ({
  getAlbums() {
    return dispatch(getAlbumsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
