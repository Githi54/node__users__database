module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-javascript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  rules: {
    semi: ['error', 'always']
  }
};
