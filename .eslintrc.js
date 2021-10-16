/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next',
    'next/core-web-vitals',
    'prettier', // 最後に書く
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // 2つセット
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    //
    complexity: ['error', 10],
  },
};
