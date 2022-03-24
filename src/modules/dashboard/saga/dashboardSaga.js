import DashboardAction, { DOING_STEP_ONE, FETCH_WHEN_CHANGE_PAGE, ON_CHANGE_PAGE, UPDATE_PROCESS } from '../action/action';
import { all, call, fork, put, select, takeLatest } from '@redux-saga/core/effects';
import { errorNotification, getError } from 'helper/notification';
import { doingProcessOne } from '../api/dashboard';
import moment from 'moment'
import { FORMAT_DATE } from 'helper/constant';

export const getCurrentStep = (state) => state.dashboard.currentStep;
export const getCurrentFile = (state) => state.dashboard.stepOne.file;
export const getParamsStepTwo = (state) => state.dashboard.stepTwo;

function* doingStepOne({ payload }) {
  try {
    const { file, params } = payload
    yield put({ type: DashboardAction.DOING_STEP_ONE.REQUEST, payload: { file, params } });
    const data = yield call(doingProcessOne, file, params);

    yield put({ type: DashboardAction.DOING_STEP_ONE.SUCCESS, payload: data });

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

function* watchOnChangePage() {
  yield takeLatest(FETCH_WHEN_CHANGE_PAGE, shouldFetchOnChangePage);
}

export default function* dashboardSaga() {
  yield all([watchDoingStepOne(), watchOnChangePage()]);
}
