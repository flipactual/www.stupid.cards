const { DefinePlugin, optimize: { DedupePlugin } } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'stupidcards.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  postcss: [
    autoprefixer,
  ],
  plugins: [
    new DedupePlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new AppCachePlugin({
      cache: [
        'index.html',
        'stupidcards.js',
      ],
      output: 'stupidcards.appcache',
    }),
    new CopyWebpackPlugin([
      {
        from: 'assets',
      },
    ]),
  ],
};
