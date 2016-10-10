var path = require('path');
var webpack = require('webpack');

module.exports = {
//  devtool: 'source-map',
  entry: [
    //'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [ 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
