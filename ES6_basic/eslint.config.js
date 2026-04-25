const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: ['babel.config.js', '.eslintrc.js', 'eslint.config.js'],
  },
  ...compat.extends('airbnb-base', 'plugin:jest/all'),
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
      'jest/no-error-equal': 'off',
      'jest/no-unnecessary-assertion': 'off',
      'jest/valid-expect-with-promise': 'off',
    },
  },
];