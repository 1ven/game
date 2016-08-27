const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index.js",
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader?cacheDirectory=true',
      exclude: /node_modules/,
    }, {
      test: require.resolve("snapsvg"),
      loader: "imports-loader?this=>window,fix=>module.exports=0",
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"],
  },
};
