import { handleError, handleResponse } from 'apis/apiUtil';
import qs from 'qs'
const axios = require('axios');
const rootURL = process.env.API_ENDPOINT;

export function doingProcessOne(data, params) {
  const formData = new FormData();
  formData.append('formFile', data);
  console.log(params)
  return axios({
    method: 'post',
    url: rootURL + '/processOne',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
    params: { ...params },
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: "repeat" })
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function doingProcessThree(data) {
  const formData = new FormData();
  formData.append('formFile', data);
  return axios({
    method: 'post',
    url: rootURL + '/processThree',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  })
    .then(handleResponse)
    .catch(handleError);
}
