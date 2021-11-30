import { HomeWebsite } from './pages/website';

import { LoginAuth } from './pages/auth';

import { DashboardPanel, SettingsPanel } from './pages/panel';

import config from './config';

const routes = [
  {
    path: config.routes_frontend.website.home,
    for: ['index'],
    render: () => <HomeWebsite title={'Selamat Datang' + config.separate + config.app_name} />,
    // isNavbar: true,
    // isPanel: true,
    // icon: "tim-icons icon-chart-pie-36",
  },

  // Auth Session
  {
    path: config.routes_frontend.auth.login,
    for: [config.routes_frontend.layout.auth],
    name: 'Login',
    // icon: "tim-icons icon-chart-pie-36",
    render: () => <LoginAuth title={'Login' + config.separate + config.app_name} />,
  },

  // Logged Session
  {
    path: config.routes_frontend.panel.dashboard,
    for: [config.routes_frontend.layout.panel],
    name: 'Dashboard',
    // icon: "tim-icons icon-chart-pie-36",
    render: () => <DashboardPanel title={'Dashboard' + config.separate + config.app_name} />,
  },
  {
    path: config.routes_frontend.panel.settings,
    for: [config.routes_frontend.layout.panel],
    name: 'Settings',
    // icon: "tim-icons icon-chart-pie-36",
    render: () => <SettingsPanel title={'Settings' + config.separate + config.app_name} />,
  },
];

export default routes;
