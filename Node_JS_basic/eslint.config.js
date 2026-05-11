import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import jest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['babel.config.js', '.eslintrc.js', 'eslint.config.js'],
  },
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
      'no-underscore-dangle': ['error', { allowAfterThis: true }],
      'jest/no-error-equal': 'off',
      'jest/no-unnecessary-assertion': 'off',
      'jest/valid-expect-with-promise': 'off',
    },
  },
];
