# @geolonia/eslint-conifg

[![Node.js CI](https://github.com/geolonia/eslint-config/actions/workflows/node.js.yml/badge.svg)](https://github.com/geolonia/eslint-config/actions/workflows/node.js.yml)

ESLint shared config for Geolonia projects.

## Usage

```shell
$ yarn add https://github.com/geolonia/eslint-config
```

```javascript
// .eslintrc.js
module.exports = {
  exetends: ['@geolonia'],
}
```

## Advanced

### TypeScript

```javascript
module.exports = {
  extends: ['@geolonia/eslint-config/typescript'],
  env: {
    node: true,
  },
  parserOptions: {
    project: ['tsconfig.json'],
  }
};
```

### extends for React project

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@geolonia',
    'react-app',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
```
