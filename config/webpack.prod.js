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
      name: ['common', 'vendor'], // Extract common dependencies between multiple entries to common.js
    }),

    new webpack.optimize.CommonsChunkPlugin({ // Bundle runtime into a seperate file
      name: 'runtime',
      minChunks: Infinity,
    }),

    new UglifyJSPlugin({ // Uglify && Tree Shaking for production environment
      sourceMap: true, //Very Important! Restrict source map file to administrator ONLY!
    }),

    new webpack.DefinePlugin( // Enable minification
      {
        'process.env': {
          'BABEL_ENV': JSON.stringify('production'),
          'NODE_ENV': JSON.stringify('production'),
        },
      }
    ),
  ],
});