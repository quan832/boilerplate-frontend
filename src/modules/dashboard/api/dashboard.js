import { handleError, handleResponse } from 'apis/apiUtil';
import qs from 'qs'
const axios = require('axios');
const rootURL = process.env.API_ENDPOINT;
import JSZip from 'jszip'
import { saveAs } from 'file-saver';

export function doingProcessOne(data, params) {
  const formData = new FormData();
  formData.append('formFile', data);
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


export function downloadExcelInProcessOne(data) {
  return axios({
    method: 'post',
    url: rootURL + '/renderExcel',
    data: data,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'blob',
  })
    .then(async (response) => {
      const data = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      saveAs(data, 'result' + '.xlsx');
    })
    .catch(handleError);
}


export function getChartDataAPI(data, params) {
  return axios({
    method: 'post',
    url: rootURL + '/getChartData',
    data: data,
    headers: { 'Content-Type': 'application/json' },
    params: { ...params },
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: "repeat" })
    }
  })
    .then(handleResponse)
    .catch(handleError);
}

export function importExcelAndDownloadAPI(data) {
  const formData = new FormData();
  formData.append('formFile', data);
  return axios({
    method: 'post',
    url: rootURL + '/importExcel',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
    responseType: 'blob',
  })
    .then(async (response) => {
      const data = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      saveAs(data, 'result' + '.xlsx');
    })
    .catch(handleError);
}


export function downloadExcelInProcessThree(data) {
  return axios({
    method: 'post',
    url: rootURL + '/renderExcelStep3',
    data: data,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'blob',
  })
    .then(async (response) => {
      const data = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
      saveAs(data, 'result' + '.xlsx');
    })
    .catch(handleError);
}
