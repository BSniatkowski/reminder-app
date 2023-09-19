module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
