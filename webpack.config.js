module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public/js',
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true
};
