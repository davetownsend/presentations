var path = require('path');
var ROOT = path.resolve(__dirname, 'src/main/resources/static');
var SRC = path.resolve(ROOT, 'src');
var DEST = path.resolve(ROOT, 'output');
var CSS = path.resolve(SRC, 'assets');
var webpack = require('webpack');

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
  devtool: 'source-map',
  entry: SRC,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_HOST': JSON.stringify('http://localhost:5050')
      }
    }),
    new DashboardPlugin(dashboard.setData)
  ],
  output: {
    path: DEST,
    filename: 'bundle.js',
    publicPath: '/output/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /(node_modules)/,
        include: SRC
      },
      {
        test: /\.css$/,
        include: CSS,
        loaders: ['style', 'css']
      }
    ]
  },
  devServer: {
    port: 5050,
    proxy: {
      '/api/*': {
        target: 'http://localhost:6060',
        secure: false,
        prependPath: false
      }
    },
    contentBase: ROOT,
    historyApiFallback: true,
    publicPath: 'http://localhost:5050/output/',
    quiet: true
  }
};