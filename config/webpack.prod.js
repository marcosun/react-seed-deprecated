const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // Uglify && Tree Shaking for production

module.exports = merge.smart(common, {
  entry: {
    vendor: [ // Bundle dependencies into a single file
      // 'babel-polyfill',
      'react',
      'react-dom',
    ],
  },

  output: {
    filename: 'assets/js/[name].[chunkhash].js',
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({ // Bundle vendor into a seperate file
      name: ['vendor'],
    }),

    new webpack.optimize.CommonsChunkPlugin({ // Bundle runtime into a seperate file
      name: 'runtime',
    }),

    new UglifyJSPlugin(), // Uglify && Tree Shaking for production

    new webpack.DefinePlugin( // Enable minification
      {
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }
    ),
  ],
});