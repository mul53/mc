import {
  getAllArtists,
  addArtist as addArtistApi,
  getArtist as getArtistApi,
  editArtist as editArtistApi,
  deleteArtist as deleteArtistApi,
  searchArtists as searchArtistsApi,
} from '../data/Api';
import {
  GET_ARTISTS,
  GET_ARTISTS_SUCCESS,
  GET_ARTISTS_ERROR,
  ADD_ARTIST,
  ADD_ARTIST_ERROR,
  ADD_ARTIST_SUCCESS,
  GET_ARTIST,
  GET_ARTIST_ERROR,
  GET_ARTIST_SUCCESS,
  EDIT_ARTIST,
  EDIT_ARTIST_SUCCESS,
  DELETE_ARTIST,
  DELETE_ARTIST_ERROR,
  DELETE_ARTIST_SUCCESS,
  SEARCH_ARTIST,
  SEARCH_ARTIST_ERROR,
  SEARCH_ARTIST_SUCCESS,
} from '../actionTypes/artistActionTypes';

export const searchArtists = query => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_ARTIST });

    const response = await searchArtistsApi(query);

    dispatch({ type: SEARCH_ARTIST_SUCCESS, payload: response.data });
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t find artists' : err.message;

    dispatch({ type: SEARCH_ARTIST_ERROR, payload: message });
  }
};

export const getArtists = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTISTS });

    const response = await getAllArtists();

    dispatch({ type: GET_ARTISTS_SUCCESS, payload: response.data });
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t load artists' : err.message;

    dispatch({ type: GET_ARTISTS_ERROR, payload: message });
  }
};

export const addArtist = (history, data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_ARTIST });

    const response = await addArtistApi(data);

    if (response.status === 201) {
      dispatch({ type: ADD_ARTIST_SUCCESS });
      history.push('/manage');
    }
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t add Artist' : err.message;
    dispatch({ type: ADD_ARTIST_ERROR, payload: message });
  }
};

export const getArtist = id => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTIST });

    const response = await getArtistApi(id);

    dispatch({
      type: GET_ARTIST_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t get Artist' : err.message;
    dispatch({ type: GET_ARTIST_ERROR, payload: message });
  }
};

export const editArtist = (history, id, data) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_ARTIST });

    const response = await editArtistApi(id, data);

    if (response.status === 200) {
      dispatch({
        type: EDIT_ARTIST_SUCCESS,
      });
      history.push(`/manage/${id}`);
    }
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t edit Artist' : err.message;
    dispatch({ type: GET_ARTIST_ERROR, payload: message });
  }
};

export const deleteArtist = (history, id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ARTIST });

    const response = await deleteArtistApi(id);

    if (response.status === 200) {
      dispatch({
        type: DELETE_ARTIST_SUCCESS,
      });
      history.push('/manage');
    }
  } catch (err) {
    const message = err.message === 'Network Error' ? 'Can\'t delete Artist' : err.message;
    dispatch({ type: DELETE_ARTIST_ERROR, payload: message });
  }
};
