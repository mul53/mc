import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/card';

import { getArtists } from '../actions/artistActions';
import Loader from '../components/loading';
import ErrorView from '../components/error';
import CenterWrapper from '../components/centerWrapper';

class ArtistPage extends Component {
  componentDidMount() {
    this.props.getArtists();
  }

  render() {
    const { artists, error, loading } = this.props;

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

    if (!artists.length) {
      return (
        <CenterWrapper
          style={{
            color: '#686868',
          }}
        >
          Currently no Artists.
        </CenterWrapper>
      );
    }

    return (
      <div className="container">
        <div className="row">
          { artists.map(({ name, label }) => (
            <div className="col-md-3">
              <Card title={name} subTitle={label} />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    artists: state.artistStore.all,
    loading: state.artistStore.loading,
    error: state.artistStore.error,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    getArtists() {
      return dispatch(getArtists());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
