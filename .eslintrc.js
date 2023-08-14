'use strict';

const merge = require('deepmerge');
const config = require('./index.js');

module.exports = merge(config, {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
});
