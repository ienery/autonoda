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
  devtool: "source-map",
  watch: true
};
