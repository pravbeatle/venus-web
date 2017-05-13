module.exports = {
  "extends": "google",
  "extends": "eslint:recommended",
  "env": {
    "es6": true,
    "node": true
  },
  "globals": {
    "window": true,
    "document": true,
    "alert": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": 1,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
  },
};
