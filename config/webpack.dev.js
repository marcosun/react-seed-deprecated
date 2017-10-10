const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge.smartStrategy(
  {
    entry: 'prepend', // Hot reloader must be placed before any other js script
  }
)(common, {
  entry: {
    app: [
      'react-hot-loader/patch', // Enable HMR
    ],
  },

  output: {
    filename: 'assets/js/[name].[hash].js',
  },

  devtool: 'inline-source-map', // Not for production

  module: {
    rules: [

      { //Styling
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
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR globally

    new webpack.NamedModulesPlugin(), // Prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(), // Do not emit compiled assets that include errors

    new webpack.optimize.CommonsChunkPlugin({ // Bundle runtime into a seperate file
      name: 'runtime',
      minChunks: Infinity,
    }),
  ],

  devServer: {
    contentBase: '../dist',
    hot: true, // Enable HMR on the server
  },
});