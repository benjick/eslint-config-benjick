module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', 'fb'],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js']}],
    'react/prop-types': 0,
  },
};
