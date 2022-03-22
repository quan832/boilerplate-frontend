// import './App.scss';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from "react-router-dom";

// // styled
// import 'antd/dist/antd.css';
// import { routes } from 'routes/routes.js';

// import PrivateTemplate from 'template/Private/PrivateTemplate.jsx';
// import LoginTemplate from 'template/Login/LoginTemplate.jsx';
// import AdminTemplate from 'template/Admin/AdminTemplate.jsx';

// export const history = createBrowserHistory();

// const Components = [
//   {
//     Component: PrivateTemplate,
//     routes: routes.routesHome
//   },
//   {
//     Component: LoginTemplate,
//     routes: routes.routesAuth
//   },
//   {
//     Component: AdminTemplate,
//     routes: routes.routesAdmin
//   }
// ];

export const history = createBrowserHistory();


const renderRoute = (Component, routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <Component
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <Router history={history}>
      {/* public Route */}
      <Switch>
        {/* {Components.map((item) => {
          return renderRoute(item.Component, item.routes);
        })} */}
        <Route
          exact
          path="/"
          component={() => <>123</>}
        />
      </Switch>
    </Router>
  );
}

export default App;
