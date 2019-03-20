import axios from 'axios';

import { API_BASE_URL } from '../util/constants';

export function getAllArtists() {
  return axios.get(`${API_BASE_URL}/api/v1/artists`);
}

export function getAllAlbums() {
  return axios.get(`${API_BASE_URL}/api/v1/albums`);
}


