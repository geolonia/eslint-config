const config = require('../typescript');

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    project: ['tsconfig.json'],
  },
};
