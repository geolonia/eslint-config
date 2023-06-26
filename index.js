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
    //   indent: ['error', 2], // NOTE: Follow editorconfig
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-console': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
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
      files: ["*.js", "*.cjs", "*.mjs", "*.jsx"],
      rules: {
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': ['error', { before: false, after: true }],
        'no-duplicate-imports': 'error',
        'no-useless-constructor': 'error',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
      },
    },
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
        'no-import-assign': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
