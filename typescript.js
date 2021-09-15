const config = require('./index');

/**
 * This presets enpower typescript linting and require type information.
 */
module.exports = {
  ...config,
  extends: [
    ...config.extends,
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...config.rules,
    // NOTE: Some @typescript-eslint/eslint-plugin rules requires type information.
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/no-misused-promises': [ 'error', { 'checksConditionals': true }],

    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': true }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // NOTE: rule conflictions
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules'
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': config.rules['comma-dangle'] || 'warn',

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': config.rules['comma-spacing'] || 'warn',

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': config.rules['no-duplicate-imports'] || 'warn',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': config.rules['no-useless-constructor'] || 'warn',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': config.rules['no-unused-vars'] || 'warn',

    'quotes': 'off',
    '@typescript-eslint/quotes': config.rules['quotes'] || 'warn',

    'semi': 'off',
    '@typescript-eslint/semi': 'warn',
  },
};
