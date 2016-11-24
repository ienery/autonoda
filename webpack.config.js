'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main/main-index.js',
    styles: './src/styles/main.scss'
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: '/js/main/[name].js',
    library: '[name]'
  },
  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!resolve-url!sass-loader?sourceMap')
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },
        {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
            loader: 'file-loader'
        }
    ]
  },
  postcss: function () {
        return [require('autoprefixer')];
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: NODE_ENV == 'development' ? "source-map" : null,
  watch: NODE_ENV == 'development',

  plugins: [
    //new webpack.EnvironmentPlugin(['NODE_ENV'])
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new ExtractTextPlugin('/css/styles.css', {
      allChunks: true
    })
  ]
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: true,
          unsafe: true
        }
    })
  );
}
