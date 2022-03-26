const store = 'dashboard';

export const OPEN_MODAL = `${store}/OPEN_BOOKING_MODAL`;

export const UPDATE_PROCESS = `${store}/UPDATE_PROCESS`;

export const DOING_STEP_ONE = `${store}/DOING_STEP_ONE`;
export const DOING_STEP_ONE_REQUEST = `${store}/DOING_STEP_ONE_REQUEST`;
export const DOING_STEP_ONE_SUCCESS = `${store}/DOING_STEP_ONE_SUCCESS`;
export const DOING_STEP_ONE_ERROR = `${store}/DOING_STEP_ONE_ERROR`;

export const DOWNLOAD_EXCEL = `${store}/DOWNLOAD_EXCEL`;
export const DOWNLOAD_EXCEL_REQUEST = `${store}/DOWNLOAD_EXCEL_REQUEST`;
export const DOWNLOAD_EXCEL_SUCCESS = `${store}/DOWNLOAD_EXCEL_SUCCESS`;
export const DOWNLOAD_EXCEL_ERROR = `${store}/DOWNLOAD_EXCEL_ERROR`;

export const DOWNLOAD_EXCEL_PROCESS_THREE = `${store}/DOWNLOAD_EXCEL_PROCESS_THREE`;
export const DOWNLOAD_EXCEL_PROCESS_THREE_REQUEST = `${store}/DOWNLOAD_EXCEL_PROCESS_THREE_REQUEST`;
export const DOWNLOAD_EXCEL_PROCESS_THREE_SUCCESS = `${store}/DOWNLOAD_EXCEL_PROCESS_THREE_SUCCESS`;
export const DOWNLOAD_EXCEL_PROCESS_THREE_ERROR = `${store}/DOWNLOAD_EXCEL_PROCESS_THREE_ERROR`;

export const GET_CHART_DATA = `${store}/GET_CHART_DATA`;
export const GET_CHART_DATA_REQUEST = `${store}/GET_CHART_DATA_REQUEST`;
export const GET_CHART_DATA_SUCCESS = `${store}/GET_CHART_DATA_SUCCESS`;
export const GET_CHART_DATA_ERROR = `${store}/GET_CHART_DATA_ERROR`;

export const SEARCH_FILTER = `${store}/SEARCH_FILTER`;

export const ON_CHANGE_PAGE = `${store}/ON_CHANGE_PAGE`;
export const FETCH_WHEN_CHANGE_PAGE = `${store}/FETCH_WHEN_CHANGE_PAGE`;

export const TOGGLE_MODAL = `${store}/TOGGLE_MODAL`;
export const CLOSE_MODAL = `${store}/CLOSE_MODAL`;

export const EDIT_ROW_STAFF = `${store}/EDIT_ROW_STAFF`;
export const DELETE_ROW_STAFF = `${store}/DELETE_ROW_STAFF`;

export const IMPORT_EXCEL_DOWNLOAD = `${store}/IMPORT_EXCEL_DOWNLOAD`

export default class DashboardAction {
  static DOING_STEP_ONE = {
    REQUEST: DOING_STEP_ONE_REQUEST,
    SUCCESS: DOING_STEP_ONE_SUCCESS,
    ERROR: DOING_STEP_ONE_ERROR
  };

  static DOWNLOAD_EXCEL = {
    REQUEST: DOWNLOAD_EXCEL_REQUEST,
    SUCCESS: DOWNLOAD_EXCEL_SUCCESS,
    ERROR: DOWNLOAD_EXCEL_ERROR
  };

  static DOWNLOAD_EXCEL_PROCESS_THREE = {
    REQUEST: DOWNLOAD_EXCEL_PROCESS_THREE_REQUEST,
    SUCCESS: DOWNLOAD_EXCEL_PROCESS_THREE_SUCCESS,
    ERROR: DOWNLOAD_EXCEL_PROCESS_THREE_ERROR
  };

  static GET_CHART_DATA = {
    REQUEST: GET_CHART_DATA_REQUEST,
    SUCCESS: GET_CHART_DATA_SUCCESS,
    ERROR: GET_CHART_DATA_ERROR
  };

  static importExcelAndDownload(data) {
    return {
      type: IMPORT_EXCEL_DOWNLOAD,
      payload: data
    };
  }

  static doingStepOne(file, params) {
    return {
      type: DOING_STEP_ONE,
      payload: { file, params }
    };
  }

  static downloadExcelProcessThree(data) {
    return {
      type: DOWNLOAD_EXCEL_PROCESS_THREE,
      payload: data
    };
  }

  static downloadExcel(data) {
    return {
      type: DOWNLOAD_EXCEL,
      payload: data
    };
  }

  static getChartData(data, params) {
    return {
      type: GET_CHART_DATA,
      payload: { data, params }
    };
  }

  static deleteRowStaff(id) {
    return {
      type: DELETE_ROW_STAFF,
      payload: id
    };
  }

  static editRow(value) {
    return {
      type: EDIT_ROW_STAFF,
      payload: value
    };
  }

  static toggleModal(type, value) {
    return {
      type: TOGGLE_MODAL,
      payload: { type, value }
    };
  }

  static cancelModal() {
    return {
      type: CLOSE_MODAL,
    };
  }

  static onChangePage(page) {
    return {
      type: ON_CHANGE_PAGE,
      payload: page
    };
  }

  static searchFilter(params) {
    return {
      type: SEARCH_FILTER,
      payload: params
    };
  }

  static openModal(id, type) {
    return {
      type: OPEN_MODAL,
      payload: { id, type }
    };
  }

  static updateProcess(step) {
    return {
      type: UPDATE_PROCESS,
      payload: step
    };
  }

  static fetchWhenChangePage() {
    return {
      type: FETCH_WHEN_CHANGE_PAGE,
    };
  }

  static closeModal() {
    return {
      type: CLOSE_MODAL
    };
  }
}
