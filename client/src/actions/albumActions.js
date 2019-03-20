import { getAllAlbums, addAlbum as addAlbumApi } from '../data/Api';
import { GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_ERROR, ADD_ALBUM, ADD_ALBUM_ERROR, ADD_ALBUM_SUCCESS } from '../actionTypes/albumActionTypes';

export async function getAlbums(dispatch) {
  try {
    dispatch({ type: GET_ALBUMS });

    const response = await getAllAlbums();

    dispatch({
      type: GET_ALBUMS_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t load albums' : err.message;

    dispatch({
      type: GET_ALBUMS_ERROR,
      payload: message,
    });
  }
}

export const addAlbum = (history, data) => async(dispatch) => {
  try {
    dispatch({ type: ADD_ALBUM });

    const response = await addAlbumApi(data);

    if (response.status === 201) {
      dispatch({ type: ADD_ALBUM_SUCCESS });
      history.push('/albums');
    }
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t add Album' : err.message;
    dispatch({ type: ADD_ALBUM_ERROR, payload: message });
  }
};
