module.exports = {
  extends: "eslint:recommended",
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    document: true,
    window: true,
    mapboxgl: true,
  },
  rules: {
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",
    "no-console": 1,
    quotes: ["error", "single"],
    yoda: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
  },
};
