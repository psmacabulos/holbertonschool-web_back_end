import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
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
      "no-underscore-dangle": ["error", { "allowAfterThis": true }],
      'jest/no-error-equal': 'off',
      'jest/no-unnecessary-assertion': 'off',
      'jest/valid-expect-with-promise': 'off',
    },
  },
];