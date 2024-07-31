module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'prettier',
      'plugin:prettier/recommended'
    ],
    rules: {
      'prettier/prettier': 'error',
      'import/order': ['error', { 'newlines-between': 'always' }]
    },
  };
  