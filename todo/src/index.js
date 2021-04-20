import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Router, Switch } from 'react-router-dom';

import { theme, history } from './utils';
import reportWebVitals from './reportWebVitals';
import PublicRoute from './hocs/PublicRoutes';
import { PublicRoutes } from './constants/routes';
import RootView from './pages';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        {PublicRoutes.map((route, index) => {
          return (
            <PublicRoute
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
      </Switch>
      <RootView />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
