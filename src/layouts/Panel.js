import React, { Component } from 'react';
// react library for routing
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
// All Routes
import routes from "../routes";
// All configuration
import config from "../config";

import ContainerPanel from '../components/Container';

class Panel extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    // if (localStorage.getItem("login") === null) {
    //     this.props.history.push(config.routes_frontend.layout.auth + config.routes_frontend.auth.login);
    // }
  }

  getRoutes(routes) {
    return routes.map((prop, key) => {
      if ((prop.for && prop.for.some((substring) =>
        config.routes_frontend.layout.panel === substring
      ))) {
        const Components = prop.render;
        return (
          <Route
            path={prop.path}
            element={<Components />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return (<>
      <Outlet />
      <Routes>
        {this.getRoutes(routes)}
        <Route
          path={"*"}
          element={<Navigate
            replace
            to={"/" + config.routes_frontend.layout.panel + "/" + config.routes_frontend.panel.dashboard}
          />}
        />
      </Routes>
    </>);
  }
}

export default Panel;