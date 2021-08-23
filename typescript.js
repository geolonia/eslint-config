const config = require('./index')

/**
 * This presets enpower typescript linting and require type information.
 */
module.exports = {
  ...config,
  rules: {
    ...config.rules,
    // NOTE: Some @typescript-eslint/eslint-plugin rules requires type information.
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    "@typescript-eslint/no-misused-promises": [ "error", { "checksConditionals": true }],
  }
}
