module.exports = {
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': 0,
    'import/extensions': ['error', 'never'],

    '@typescript-eslint/no-namespace': 0,

    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],

    'react/prop-types': 0,
    'react/style-prop-object': [
      2,
      {
        allow: ['StatusBar'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-curly-brace-presence': 0,

    'prettier/prettier': 1,
  },

  ignorePatterns: ['babel.config.js'],
};