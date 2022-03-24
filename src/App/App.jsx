// import './App.scss';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from 'pages/HomePage'
import 'assets/scss/App.scss'
import history from "helper/history";
import HomeTemplate from "template/HomeTemplate";
import { routes } from "routes/routes";

// styled
import 'antd/dist/antd.css';

const Components = [{ Component: HomeTemplate, routes: routes.routesHome }];

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
        {Components.map((item) => {
          return renderRoute(item.Component, item.routes);
        })}
      </Switch>
    </Router>
  );
}

export default App;
