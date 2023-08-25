# @geolonia/eslint-conifg

[![Node.js CI](https://github.com/geolonia/eslint-config/actions/workflows/node.js.yml/badge.svg)](https://github.com/geolonia/eslint-config/actions/workflows/node.js.yml)

Internal ESLint config for Geolonia projects.

## Usage

```shell
$ yarn add eslint @geolonia/eslint-config --dev
```

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@geolonia'],

  // add `env` if required
  env: {
    browser: true,
    node: true,
    jest: true,
  },

  parserOptions: {
    sourceType: "module", // add if "type": "module" is set in package.json
    project: ['tsconfig.json'], // add if you use TypeScript in the project
  }
}
```
