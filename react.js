const config = require('./index');

module.exports = {
  ...config,
  extends: [
    ...config.extends,
    'plugin:react/recommended',
  ],
  settings: {
    ...config.settings,
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    ...config.rules,
    'react/prop-types': 'off',
  },
};
