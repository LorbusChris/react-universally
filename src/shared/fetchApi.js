/* flow */

import { HttpError } from 'found';

// Keystone Universal Data Fetching
// TODO: Access Keystone Lists without Auth
export default function fetchPage(location: string) {
  // TODO: Get env vars from config
  const url = `${process.env.API_PATH}/pages/${location}`;
  return fetch(url, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      accept: 'application/json',
    },
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    let error;
    if (response.status && response.error && response.detail) {
      error = {
        status: response.status,
        data: response.json(),
      };
      throw error;
    } else if (response.status && response.error) {
      error = {
        status: response.status,
        data: response.json(),
      };
      throw error;
    } else if (response.status) {
      error = response.status;
      throw error;
    }
    error = 404;
    throw error;
  })
  .then((body) => {
    const data = body.fields;
    return data;
  })
  .catch((error) => { throw new HttpError(error); });
}
