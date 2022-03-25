import DashboardAction, { DELETE_ROW_STAFF, DOING_STEP_ONE, DOWNLOAD_EXCEL, FETCH_WHEN_CHANGE_PAGE, ON_CHANGE_PAGE, UPDATE_PROCESS } from '../action/action';
import { all, call, fork, put, select, takeLatest } from '@redux-saga/core/effects';
import { errorNotification, getError, successNotification } from 'helper/notification';
import { doingProcessOne, downloadExcelInProcessOne } from '../api/dashboard';
import moment from 'moment'
import { FORMAT_DATE } from 'helper/constant';
import JSZip from 'jszip'
export const getCurrentStep = (state) => state.dashboard.currentStep;
export const getCurrentFile = (state) => state.dashboard.stepOne.file;
export const getParamsStepTwo = (state) => state.dashboard.stepTwo;
export const getExceptStaff = (state) => state.dashboard.stepTwo.staffDelete;

function* doingStepOne({ payload }) {
  try {
    const { file, params } = payload
    const exceptStaff = yield select(getExceptStaff)
    yield put({ type: DashboardAction.DOING_STEP_ONE.REQUEST, payload: { file, params } });
    const newParams = {
      ...params, exceptStaff
    }
    const data = yield call(doingProcessOne, file, newParams);

    yield put({ type: DashboardAction.DOING_STEP_ONE.SUCCESS, payload: data });
    successNotification('get data success');
  } catch (error) {
    errorNotification(getError(error));
    yield put({
      type: DashboardAction.DOING_STEP_ONE.ERROR,
      payload: getError(error)
    });
  }
}

function* watchDoingStepOne() {
  yield takeLatest(DOING_STEP_ONE, doingStepOne);
}

function* shouldFetchOnChangePage() {
  try {
    const file = yield select(getCurrentFile);
    const stepTwo = yield select(getParamsStepTwo)
    const params = {
      date: stepTwo.date,
      name: stepTwo.name,
      clinic: stepTwo.clinic,
      page: stepTwo.page,
      perPage: stepTwo.perPage,
    }
    const payload = { file, params }
    yield fork(doingStepOne, { payload })
  } catch (error) {
    errorNotification(getError(error));
  }
}



function* downloadExcel({ payload }) {
  try {
    yield put({ type: DashboardAction.DOWNLOAD_EXCEL.REQUEST });
    const data = yield call(downloadExcelInProcessOne, payload);

    yield put({ type: DashboardAction.DOWNLOAD_EXCEL.SUCCESS, payload: data });

    successNotification('Download success');
  } catch (error) {
    errorNotification(getError(error));
    yield put({
      type: DashboardAction.DOWNLOAD_EXCEL.ERROR,
      payload: getError(error)
    });
  }
}


function* watchOnChangePage() {
  yield takeLatest(FETCH_WHEN_CHANGE_PAGE, shouldFetchOnChangePage);
}

function* watchOnDeleteRow() {
  yield takeLatest(DELETE_ROW_STAFF, shouldFetchOnChangePage);
}

function* watchDownloadExcel() {
  yield takeLatest(DOWNLOAD_EXCEL, downloadExcel);
}

export default function* dashboardSaga() {
  yield all([watchDoingStepOne(), watchOnChangePage(), watchOnDeleteRow(), watchDownloadExcel()]);
}
