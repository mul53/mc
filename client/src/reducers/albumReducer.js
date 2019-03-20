import { GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_ERROR } from '../actionTypes/albumActionTypes';

const initialState = {
  loading: false,
  all: [],
  show: {},
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
  case GET_ALBUMS:
    return Object.assign({}, state, { loading: true });
  case GET_ALBUMS_SUCCESS:
    return Object.assign({}, state, { all: action.payload, loading: false, error: '' });
  case GET_ALBUMS_ERROR:
    return Object.assign({}, state, { error: action.payload, loading: false });
  default:
    return state;
  }
}
