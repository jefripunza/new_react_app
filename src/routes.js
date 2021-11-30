import {
  HomeWebsite,
} from "./pages/website"

import config from "./config"

const routes = [
  {
    path: "/",
    for: [
      "index",
    ],
    title: "Selamat Datang | " + config.app_name,
    render: () => <HomeWebsite
        title={"Selamat Datang" + config.separate + config.app_name}
    />,
    // isNavbar: true,
    // isPanel: true,
    // icon: "tim-icons icon-chart-pie-36",
  },
]


export default routes