var path = require('path');
var ROOT = path.resolve(__dirname, 'src/main/resources/static');
var SRC = path.resolve(ROOT, 'src');
var OUTPUT = path.resolve(ROOT, 'output');
var ASSETS = path.resolve(SRC, 'assets');

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
    new DashboardPlugin(dashboard.setData)
  ],
  output: {
    path: OUTPUT,
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
      }, {
        test: /\.css$/,
        loaders: ["style", "raw"],
        include: __dirname
      }, {
        test: /\.svg$/,
        loader: "url?limit=10000&mimetype=image/svg+xml",
        include: ASSETS
      }, {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
        include: ASSETS
      }, {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif",
        include: ASSETS
      }, {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg",
        include: ASSETS
    }]
  },
  devServer: {
    port: 3030,
    proxy: { // proxy requests over to spring boot
      '/': {
        target: 'http://localhost:4040',
        secure: false,
        prependPath: false
      }
    },
    //contentBase: ROOT,
    publicPath: 'http://localhost:3030/output/',
    quiet: true
  }
};
