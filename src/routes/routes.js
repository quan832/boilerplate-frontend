import { history } from 'App/App.jsx';
import LoginAction from 'modules/auth/actions/authAction';
import AdminPage from 'pages/Admin/AdminPage';
import HomePage from 'pages/Home/HomePage.jsx';
import LoginPage from 'pages/Login/LoginPage.jsx';
import ClinicPage from 'pages/Clinic/userpage.jsx';
import ClinicPage1 from 'pages/Clinic/adminpage.jsx';
import { store } from '../redux/store.js';

export function handleLogout() {
  store.dispatch(LoginAction.logoutUser());
}

const routesHome = [{ path: '/intro', exact: true, component: HomePage }];

export const routes = { routesHome };
