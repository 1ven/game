const webpack = require('webpack');

module.exports = {
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: "ts-loader",
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
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
};
