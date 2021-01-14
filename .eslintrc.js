module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'arrow-parens': 'warn',
    'operator-linebreak': 'off',
    'no-unused-vars': 'warn',
    'max-len': 'warn',
    'indent': 'off',
    'object-curly-spacing': 'always',
  },
};
