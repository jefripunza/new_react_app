import React, { Component } from 'react';
// react library for routing
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import { Error404 } from './pages/error';

// LayOut init
import { AuthLayout, PanelLayout } from './layouts';

import routes from './routes';
import config from './config';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* Setup Layout */}
          <Route
            path={config.routes_frontend.layout.auth}
            element={<AuthLayout />}
            key="AuthLayout"
          >
            <Route path={'*'} element={<Outlet />} />
          </Route>
          <Route
            path={config.routes_frontend.layout.panel}
            element={<PanelLayout />}
            key="PanelLayout"
          >
            <Route path={'*'} element={<Outlet />} />
          </Route>

          {/* add index routes to routes.js */}
          {routes
            .filter((route) => {
              return route.for.some((substring) => substring === 'index');
            })
            .map((route) => {
              const Components = route.render;
              return (
                <Route
                  path={route.path}
                  element={<Components title={route.title} />}
                  key={route.path}
                />
              );
            })}

          {/* Error 404 */}
          <Route
            path={'*'}
            element={<Error404 title={'404 Page Not Found!' + config.separate + config.app_name} />}
            key="Error404"
          />
        </Routes>
      </Router>
    );
  }
}
