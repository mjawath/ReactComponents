import axios from "axios";
import { BASE_API_URL } from './Constants'

export function post(url, body, actionOnSuccess, actionOnFailier) {
  return axios.post(url, body)
    .then(response => {
      actionOnSuccess(response)
    })
    .catch(error => {
      actionOnFailier(error)
    });
}

export function get(url, actionOnSuccess, actionOnFailier) {

  return axios.get(url)
    .then(response => {
      actionOnSuccess(response)
    })
    .catch(error => {
      actionOnFailier(error)
    });
}

// const http={};
// http.post = post;

// export default http;