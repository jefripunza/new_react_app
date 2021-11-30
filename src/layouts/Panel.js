import React, { useEffect } from 'react';
// react library for routing
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
// All Routes
import routes from '../routes';
// All configuration
import config from '../config';

import { WebsiteContainer } from '../components/Container';

function Panel() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('ok useEffect');
    if (localStorage.getItem('login') === null) {
      navigate('/' + config.routes_frontend.layout.auth + '/' + config.routes_frontend.auth.login, {
        replace: true,
      });
    }
  }, []);

  function getRoutes(routes) {
    return routes.map((prop, key) => {
      if (prop.for && prop.for.some((match) => config.routes_frontend.layout.panel === match)) {
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
                '/' +
                config.routes_frontend.layout.panel +
                '/' +
                config.routes_frontend.panel.dashboard
              }
            />
          }
        />
      </Routes>
    </WebsiteContainer>
  );
}

export default Panel;
