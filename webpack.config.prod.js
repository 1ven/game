const webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    filename: './dist/bundle.js',
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"],
  },
};
