module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        // "airbnb",
        "prettier",
    ],
    // "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2021,
        // "allowImportExportEverywhere": false,
        // "codeFrame": false,
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
      // "max-len": ["error", {"code": 100}],
      // "prefer-promise-reject-errors": ["off"],
      // "react/jsx-filename-extension": ["off"],
      // "react/prop-types": ["warn"],
      // "no-return-assign": ["off"],
    },
};
