module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'no-trailing-spaces': 'error',
    'react-refresh/only-export-components': 'warn',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*']
      }
    ],
    'prettier/prettier': 'error'
  }
};
