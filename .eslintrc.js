module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-non-null-assertion': 'off',
    "import/no-webpack-loader-syntax": "off"
  },
  // module: {
  //   rules: [
  //       {
  //           test: /\.mdx?$/,
  //           use: [
  //               {
  //                   loader: 'babel-loader', 
  //                   options: {presets: ['@babel/preset-env', "@babel/preset-react"]}
  //               }, 
  //               '@mdx-js/loader'
  //           ]
  //       }
  //   ]
  // }
};
