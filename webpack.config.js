const Webpack = require('webpack');
const Path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {   // ------------------ config for javascripts ------------------ //
    entry: {
      bundle: './src/js_entry.js',
    },
    output: {
      path: Path.join(__dirname, 'docs/js'),
      filename: '[name].js',
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      ]
    },
    resolve: {
      root: Path.join(__dirname, 'node_modules'),
    },
    resolveLoader: {
      root: Path.join(__dirname, 'node_modules'),
    },
    babel: {
      presets: ['es2015'],
    },
    plugins: [
      new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },

  {   // ------------------ config for stylesheets ------------------ //
    entry: {
      bundle: './src/style_entry.js',
    },
    output: {
      path: Path.join(__dirname, 'docs/css'),
      filename: '[name].css',
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
        { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css!stylus') },
        { test: /\.(jpg|png)$/, loader: "file?name=images/[name].[ext]" },
      ]
    },
    resolve: {
      root: Path.join(__dirname, 'node_modules'),
    },
    resolveLoader: {
      root: Path.join(__dirname, 'node_modules'),
    },
    plugins: [
      new ExtractTextPlugin('[name].css', {
        allChunks: true
      }),
    ],
  },
]
