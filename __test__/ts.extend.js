const config = require('../index');

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    project: ['tsconfig.json'],
  },
};
