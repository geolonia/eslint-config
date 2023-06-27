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
      files: [ "*.cjs" ],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: [ "*.mjs", "*.jsx" ],
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['error', 'always'],

        '@typescript-eslint/no-misused-promises': [ 'warn', { 'checksConditionals': true }],
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
      },
    },
    {
      files: ["*.jsx", "*.tsx"],
      extends: [
        'plugin:react/recommended',
      ],
      env: {
        browser: true,
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
      rules: {
        'react/prop-types': 'off',
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
