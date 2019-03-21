import {
  GET_ARTISTS,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_ERROR,
  GET_ARTIST_SUCCESS,
  SEARCH_ARTIST,
  SEARCH_ARTIST_ERROR,
  SEARCH_ARTIST_SUCCESS,
} from '../actionTypes/artistActionTypes';

const initialState = {
  loading: false,
  all: [],
  show: {},
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTISTS:
    case SEARCH_ARTIST:
      return Object.assign({}, state, { loading: true });
    case GET_ARTISTS_SUCCESS:
    case SEARCH_ARTIST_SUCCESS:
      return Object.assign({}, state, { all: action.payload, loading: false, error: '' });
    case GET_ARTISTS_ERROR:
    case SEARCH_ARTIST_ERROR:
      return Object.assign({}, state, { error: action.payload, loading: false });
    case GET_ARTIST_SUCCESS:
      return Object.assign({}, state, { show: action.payload });
    default:
      return state;
  }
}
