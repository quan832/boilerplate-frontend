import { combineReducers } from 'redux';

import AppReducer from 'App/reducer/App.reducer';
import dashboardReducer from 'modules/dashboard/reducers/reducer';

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  app: AppReducer,
  // auth: AuthReducer,
  dashboard: dashboardReducer
  // admin: AdminReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
