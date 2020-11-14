/* eslint-disable */
const path = require('path');

module.exports = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './prod/'),
    filename: 'index.js',
    publicPath: '/'
  }
};
