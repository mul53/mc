import axios from 'axios';

import { API_BASE_URL } from '../util/constants';

/*  Artists  */

export function getAllArtists() {
  return axios.get(`${API_BASE_URL}/api/v1/artists`);
}

export function getArtist(id) {
  return axios.get(`${API_BASE_URL}/api/v1/artist/${id}`);
}

export function addArtist(data) {
  return axios.post(`${API_BASE_URL}/api/v1/artist/create`, data);
}

export function editArtist(id, data) {
  return axios.put(`${API_BASE_URL}/api/v1/artist/update/${id}`, data);
}

export function deleteArtist(id) {
  return axios.delete(`${API_BASE_URL}/api/v1/artist/delete/${id}`);
}

/*   Albums   */

export function getAllAlbums() {
  return axios.get(`${API_BASE_URL}/api/v1/albums`);
}

export function addAlbum(data) {
  return axios.post(`${API_BASE_URL}/api/v1/album/create`, data);
}
