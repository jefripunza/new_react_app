import React, { Component } from 'react'
// react library for routing
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import {
  Error404,
} from "./pages/error"

import routes from "./routes"
import config from "./config"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* add index routes to routes.js */}
          {routes
            .filter((route) => {
              return route.for.some((substring) => substring === "index");
            })
            .map((route) => {
              const Components = route.render;
              return <Route
                path={route.path}
                element={<Components title={route.title} />}
              />
            })}

          {/* Error 404 */}
          <Route
            path={"*"}
            element={<Error404
              title={"404 Page Not Found!" + config.separate + config.app_name}
            />}
          />
        </Routes>
      </Router>
    )
  }
}
