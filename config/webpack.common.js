const path = require('path');
const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Dynamically generate index.html with multiple entries
const CleanWebpackPlugin = require('clean-webpack-plugin'); // Clean dist folder

module.exports = {
  entry: {
    app: [
      paths.appIndexJs, // App entry
    ],
  },

  output: {
    path: paths.appDist,
  },

  devtool: 'source-map',

  module: {
    rules: [

      { // Javascript
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel-loader',
      },

      { //Styling
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:6]',
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
    new CleanWebpackPlugin( // Clean dist folder
      ['dist'],
      {
        root: paths.appPath,
        verbose: true,
      }
    ),

    new HtmlWebpackPlugin({ // Dynamically generate index.html with multiple entries
      // Required
      inject: false,
      template: require('html-webpack-template'),

      // Optional
      title: 'React Seed', // HTML title
      appMountId: 'app', // React will initialise on HTML tag with this id
    }),
  ],
};