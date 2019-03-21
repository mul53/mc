import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import artistReducer from './artistReducer';
import albumReducer from './albumReducer';

export default history => combineReducers({
  router: connectRouter(history),
  artistStore: artistReducer,
  albumStore: albumReducer,
});
