import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/card';
import { getAlbums } from '../actions/albumActions';
import Loader from '../components/loading';
import ErrorView from '../components/error';
import CenterWrapper from '../components/centerWrapper';

class AlbumPage extends Component {
  componentDidMount() {
    this.props.getAlbums();
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
            <div key={_id} className="col-md-3">
              <Card title={title} subTitle={year} />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    albums: state.albumStore.all,
    loading: state.albumStore.loading,
    error: state.albumStore.error,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getAlbums() {
      return getAlbums(dispatch);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);
