import { getAllAlbums } from '../data/Api';
import { GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_ERROR } from '../actionTypes/albumActionTypes';

export async function getAlbums(dispatch) {
  try {
    dispatch({ type: GET_ALBUMS });
    
    var response = await getAllAlbums();
    
    dispatch({ 
      type: GET_ALBUMS_SUCCESS, 
      payload: response.data
    });
  } catch (err) {
    var message = err.message === 'Network Error' ? "Can't load albums": err.message;
    
    dispatch({ 
      type: GET_ALBUMS_ERROR, 
      payload: message
    });
  }
}