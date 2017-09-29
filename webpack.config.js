const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true,
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
//  plugins: [
//    new webpack.HotModuleReplacementPlugin(),
//  ],
  
  devServer: {
    contentBase: './dist',
//    hot: true,
  },
};