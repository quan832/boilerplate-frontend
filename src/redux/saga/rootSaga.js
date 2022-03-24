import dashboardSaga from 'modules/dashboard/saga/dashboardSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('rootSaga');
  yield all([dashboardSaga()]);
}
