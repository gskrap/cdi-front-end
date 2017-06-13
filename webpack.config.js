const ExtractTextPlugin = require("extract-text-webpack-plugin");

let path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  output: {
    path: path.resolve(__dirname + '/dist/js'),
    filename: 'main.js',
    devtoolLineToLine: true
  },
  module: {
    rules: [
      {
        test: /src\/.+.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
