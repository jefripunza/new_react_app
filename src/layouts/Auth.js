import React, { useEffect } from 'react';
// react library for routing
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// All Routes
import routes from '../routes';
// All configuration
import config from '../config';

import { WebsiteContainer } from '../components/Container';

function Auth() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('ok useEffect');
    if (localStorage.getItem('login') != null) {
      navigate(
        '/' + config.routes_frontend.layout.panel + '/' + config.routes_frontend.panel.dashboard,
        { replace: true },
      );
    }
  }, []);

  function getRoutes(routes) {
    return routes.map((prop, key) => {
      if (prop.for && prop.for.some((match) => config.routes_frontend.layout.auth === match)) {
        const Components = prop.render;
        return <Route path={prop.path} element={<Components />} key={key} />;
      } else {
        return null;
      }
    });
  }

  return (
    <WebsiteContainer>
      <Routes>
        {getRoutes(routes)}
        <Route
          path={'*'}
          element={
            <Navigate
              replace
              to={
                '/' + config.routes_frontend.layout.auth + '/' + config.routes_frontend.auth.login
              }
            />
          }
        />
      </Routes>
    </WebsiteContainer>
  );
}

export default Auth;
