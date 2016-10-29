'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/main/main-index.js'
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: '/',
    filename: '/main/main-index-bundle.js',
    library: 'main'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
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
