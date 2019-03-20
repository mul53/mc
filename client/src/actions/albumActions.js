import {
  getAllAlbums, addAlbum as addAlbumApi, getAlbum as getAlbumApi, editAlbum as editAlbumApi, deleteAlbum as deleteAlbumApi,
} from '../data/Api';
import {
  GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_ERROR, ADD_ALBUM, ADD_ALBUM_ERROR, ADD_ALBUM_SUCCESS, GET_ALBUM, GET_ALBUM_ERROR, GET_ALBUM_SUCCESS, DELETE_ALBUM, DELETE_ALBUM_ERROR, DELETE_ALBUM_SUCCESS, EDIT_ALBUM, EDIT_ALBUM_ERROR, EDIT_ALBUM_SUCCESS,
} from '../actionTypes/albumActionTypes';

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

export const addAlbum = (history, data) => async (dispatch) => {
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

export const getAlbum = id => async (dispatch) => {
  try {
    dispatch({ type: GET_ALBUM });

    const response = await getAlbumApi(id);

    dispatch({
      type: GET_ALBUM_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t get Album' : err.message;
    dispatch({ type: GET_ALBUM_ERROR, payload: message });
  }
};

export const editAlbum = (history, id, data) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_ALBUM });

    const response = await editAlbumApi(id, data);

    if (response.status === 200) {
      dispatch({
        type: EDIT_ALBUM_SUCCESS,
      });
      history.push(`/manage/album/${id}`);
    }
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t edit Album' : err.message;
    dispatch({ type: EDIT_ALBUM_ERROR, payload: message });
  }
};

export const deleteAlbum = (history, id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ALBUM });

    const response = await deleteAlbumApi(id);

    if (response.status === 200) {
      dispatch({
        type: DELETE_ALBUM_SUCCESS,
      });
      history.push('/manage');
    }
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t delete Album' : err.message;
    dispatch({ type: DELETE_ALBUM_ERROR, payload: message });
  }
};
