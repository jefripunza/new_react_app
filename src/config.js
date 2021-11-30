import json from "./config.json"

const env = process.env.NODE_ENV
const isProduction = env === "production"

const config = {
    app_name: "Portfolio Jefri Herdi Triyanto",

    separate: " | ",
    backend_url: isProduction ? "/" : json.server,
    isProduction,
    env,

    routes_frontend: {
        website: {
            home: "/",
        },
        layout: {
            auth: "auth",
            panel: "panel",
        },
        auth: {
            login: "login",
            logout: "logout",
            //
            signup: "signup",
            //
            reset_password: "reset-password",
        },
        panel: {
            dashboard: "dashboard",
            docs: "docs",
            orders: "orders",
            chat: "chat",
            //
            pages: {
                index: "pages",
                //
                blank_page: "blank-page",
            },
            //
            bootstrap: {
                index: "bootstrap",
                //
            },
            //
            charts: "charts",
            help: "help",
            //
            notification: "notification",
            account: "account",
            //
            settings: "settings",
            pricing: "pricing",
        }
    },
}

window.chartColors = {
    green: '#75c181', // rgba(117,193,129, 1)
    blue: '#5b99ea', // rgba(91,153,234, 1)
    gray: '#a9b5c9',
    text: '#252930',
    border: '#e7e9ed'
};

window.themesColors = {
    primary: '#75c181',
    secondary: '#252930',
    warning: '#5b99ea',
    error: '#a9b5c9',
    success: '#e7e9ed',
    panel: '#e7e9ed',
};

export default config