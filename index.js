module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:editorconfig/all',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  plugins: ['editorconfig', 'import'],
  rules: {
    'array-callback-return': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['warn', { before: false, after: true }], // TODO: force gradually
    //   indent: ['error', 2], // NOTE: Follow editorconfig
    'key-spacing': 'error',
    'keyword-spacing': 'warn', // TODO: force gradually
    'generator-star-spacing': 'error',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    quotes: ['error', 'single'],
    'rest-spread-spacing': 'error',
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'sort-imports': 'off',
    'space-before-blocks': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',
    yoda: ['error', 'never', { exceptRange: true }],

    'import/no-extraneous-dependencies': ['warn', { 'devDependencies': false }],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.ts',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/*.spec.jsx',
        '**/*.spec.tsx',      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
