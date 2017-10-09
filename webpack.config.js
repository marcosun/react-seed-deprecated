const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Dynamically generate index.html with multiple entries
const CleanWebpackPlugin = require('clean-webpack-plugin'); //Clean dist folder

module.exports = {
  entry: {
    vendor: [
      // 'babel-polyfill',
      'react-hot-loader/patch',
      'react',
      'react-dom',
    ],
    app: [
      './src/index.jsx',
    ],
  },

  devtool: 'inline-source-map',

  output: {
    filename: 'assets/js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [

      { // Javascript
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

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
              modules: true,
              sourceMap: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },

      { //Images
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name][hash].[ext]',
            },
          },
        ],
      },

      { //Fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name][hash].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template'),

      // Optional
      title: 'React Seed',
      appMountId: 'app',
    }),

    new webpack.optimize.CommonsChunkPlugin({ // Extract vendor into a seperate file
      name: 'vendor',
    }),

    new webpack.optimize.CommonsChunkPlugin({ // Extract runtime into a seperate file
      name: 'runtime',
    }),

    new webpack.HotModuleReplacementPlugin(), // Enable HMR globally

    new webpack.NamedModulesPlugin(), // Prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(), // Do not emit compiled assets that include errors
  ],
  
  devServer: {
    contentBase: './dist',
    hot: true, // Enable HMR on the server
  },
};