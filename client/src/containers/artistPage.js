import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';

import Card from '../components/card';

import { getArtists, searchArtists as searchArtistsApi } from '../actions/artistActions';
import Loader from '../components/loading';
import ErrorView from '../components/error';
import CenterWrapper from '../components/centerWrapper';

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getArtists } = this.props;
    getArtists();
  }

  componentDidUpdate() {
    const { searchArtists, searchQuery, push } = this.props;
    const { lastQuery } = this.state;
    if (searchQuery && searchQuery !== lastQuery) {
      const query = new URLSearchParams(searchQuery).get('name');
      searchArtists(query);
      this.setState({
        lastQuery: searchQuery,
      });
    }
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
          { artists && artists.map(({ name, label, _id }) => (
            <Link to={`/manage/${_id}`} >
            <div key={_id} className="col-md-3">
              <Card title={name} subTitle={label} />
            </div>
            </Link>
          )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artists: state.artistStore.all,
  loading: state.artistStore.loading,
  error: state.artistStore.error,
  searchQuery: state.router.location.search,
});

const mapDispatchToProps = dispatch => ({
  getArtists() {
    return dispatch(getArtists());
  },
  searchArtists(query) {
    return dispatch(searchArtistsApi(query));
  },
  pushApi(path) {
    return dispatch(push(path));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
