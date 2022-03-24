const store = 'dashboard';

export const OPEN_MODAL = `${store}/OPEN_BOOKING_MODAL`;

export const UPDATE_PROCESS = `${store}/UPDATE_PROCESS`;

export const DOING_STEP_ONE = `${store}/DOING_STEP_ONE`;
export const DOING_STEP_ONE_REQUEST = `${store}/DOING_STEP_ONE_REQUEST`;
export const DOING_STEP_ONE_SUCCESS = `${store}/DOING_STEP_ONE_SUCCESS`;
export const DOING_STEP_ONE_ERROR = `${store}/DOING_STEP_ONE_ERROR`;

export const SEARCH_FILTER = `${store}/SEARCH_FILTER`;

export const ON_CHANGE_PAGE = `${store}/ON_CHANGE_PAGE`;
export const FETCH_WHEN_CHANGE_PAGE = `${store}/FETCH_WHEN_CHANGE_PAGE`;

export const TOGGLE_MODAL = `${store}/TOGGLE_MODAL`;
export const CLOSE_MODAL = `${store}/CLOSE_MODAL`;

export const EDIT_ROW_STAFF = `${store}/EDIT_ROW_STAFF`;
export const DELETE_ROW_STAFF = `${store}/DELETE_ROW_STAFF`;

export default class DashboardAction {
  static DOING_STEP_ONE = {
    REQUEST: DOING_STEP_ONE_REQUEST,
    SUCCESS: DOING_STEP_ONE_SUCCESS,
    ERROR: DOING_STEP_ONE_ERROR
  };

  static doingStepOne(file, params) {
    return {
      type: DOING_STEP_ONE,
      payload: { file, params }
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
