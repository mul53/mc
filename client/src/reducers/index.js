import { combineReducers } from 'redux';
import artistReducer from './artistReducer';
import albumReducer from './albumReducer';

export default combineReducers({
  artistStore: artistReducer,
  albumStore: albumReducer,
});
