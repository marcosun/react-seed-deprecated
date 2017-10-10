const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Dynamically generate index.html with multiple entries
const CleanWebpackPlugin = require('clean-webpack-plugin'); // Clean dist folder

module.exports = {
  entry: {
    app: [
      './src/index.jsx', // App entry
    ],
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
  },

  devtool: 'source-map',

  module: {
    rules: [

      { // Javascript
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "../src"),
        loader: 'babel-loader',
      },

      { //Styling
        test: /\.css$/,
        include: path.resolve(__dirname, "../src"),
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
        include: path.resolve(__dirname, "../src"),
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
        include: path.resolve(__dirname, "../src"),
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
        root: path.resolve(__dirname , '../'),
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