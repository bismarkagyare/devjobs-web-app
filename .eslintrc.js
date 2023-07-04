module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'no-alert': 'off',
    enforceForRenamedProperties: false,
    'prefer-arrow-callback': 'off',
  },
};
