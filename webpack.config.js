'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack');


const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    //users: './frontend/users/index.js',
    //styles: './frontend/users/styles/styles.scss',
    mainMenu: './frontend/main-menu/main-menu.js',
    styles: './frontend/main-menu/styles/styles.scss',
    //bootstrap: './src/main/bootstrap.js',
    //styles: './src/styles/main.scss',
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    //filename: '/js/users/[name].js',
    filename: '/js/main-menu/[name].js',
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
  postcss() {
        return [
            require('autoprefixer'),
            require('cssnext'),
            require('postcss-flexbugs-fixes')
        ];
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
      new ExtractTextPlugin('/css/main-menu/main-menu-styles.css', {
        allChunks: true
      })
      /*
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Tether: "tether",
        "window.Tether": "tether",
        Tooltip: "exports?Tooltip!bootstrap/js/dist/tooltip",
        Alert: "exports?Alert!bootstrap/js/dist/alert",
        Button: "exports?Button!bootstrap/js/dist/button",
        Carousel: "exports?Carousel!bootstrap/js/dist/carousel",
        Collapse: "exports?Collapse!bootstrap/js/dist/collapse",
        Dropdown: "exports?Dropdown!bootstrap/js/dist/dropdown",
        Modal: "exports?Modal!bootstrap/js/dist/modal",
        Popover: "exports?Popover!bootstrap/js/dist/popover",
        Scrollspy: "exports?Scrollspy!bootstrap/js/dist/scrollspy",
        Tab: "exports?Tab!bootstrap/js/dist/tab",
        Tooltip: "exports?Tooltip!bootstrap/js/dist/tooltip",
        Util: "exports?Util!bootstrap/js/dist/util",
      })
      */
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
