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
        "allowImportExportEverywhere": false,
        "codeFrame": false,
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
      "max-len": ["error", {"code": 100}],
      "react/prop-types": ["off"],
      "prefer-promise-reject-errors": ["off"],
      "no-return-assign": ["off"],
      // jangan sampe on di bawah ini
      "react/jsx-key": ["off"],
      "no-unused-vars": ["off"],
      "react/react-in-jsx-scope": ["off"],
      "react/jsx-filename-extension": ["off"],
    },
};
