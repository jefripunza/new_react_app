import {
  HomeWebsite,
} from "./pages/website";

import {
  DashboardPanel,

  SettingsPanel,
} from "./pages/panel"

import config from "./config"

const routes = [
  {
    path: config.routes_frontend.website.home,
    for: [
      "index",
    ],
    render: () => <HomeWebsite
      title={"Selamat Datang" + config.separate + config.app_name}
    />,
    // isNavbar: true,
    // isPanel: true,
    // icon: "tim-icons icon-chart-pie-36",
  },
  {
    path: config.routes_frontend.panel.dashboard,
    for: [
      config.routes_frontend.layout.panel,
    ],
    name: "Dashboard",
    // icon: "tim-icons icon-chart-pie-36",
    render: () => <DashboardPanel
      title={"Dashboard" + config.separate + config.app_name}
    />,
  },
  {
    path: config.routes_frontend.panel.settings,
    for: [
      config.routes_frontend.layout.panel,
    ],
    name: "Settings",
    // icon: "tim-icons icon-chart-pie-36",
    render: () => <SettingsPanel
      title={"Settings" + config.separate + config.app_name}
    />,
  },
]


export default routes