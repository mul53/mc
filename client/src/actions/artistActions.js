import { getAllArtists } from '../data/Api';
import { GET_ARTISTS, GET_ARTISTS_SUCCESS, GET_ARTISTS_ERROR } from '../actionTypes/artistActionTypes';

export async function getArtists(dispatch) {
  try {
    dispatch({ type: GET_ARTISTS });
    var response = await getAllArtists();
    dispatch({ type: GET_ARTISTS_SUCCESS, payload: response.data});
  } catch (err) {
    var message = err.message === 'Network Error' ? "Can't load artists": err.message;
    dispatch({ type: GET_ARTISTS_ERROR, payload: message});
  }
}