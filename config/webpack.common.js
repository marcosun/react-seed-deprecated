const paths = require('./paths');
// Dynamically generate index.html with multiple entries
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Clean dist folder
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Prevents users from importing files from outside of src/
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

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

      { // Styling
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
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: paths.appConfig,
              },
            },
          },
          {
            loader: 'stylus-loader',
          },
        ],
      },

      { // Images
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

      { // Fonts
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
    // Prevents users from importing files from outside of src/
    new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),

    // Clean dist folder
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: paths.appPath,
        verbose: true,
      }
    ),

    // Dynamically generate index.html with multiple entries
    new HtmlWebpackPlugin({
      // Required
      inject: false,
      template: require('html-webpack-template'),

      // Optional
      title: 'React Seed', // HTML title
      appMountId: 'app', // React will initialise on HTML tag with this id
    }),
  ],
};
