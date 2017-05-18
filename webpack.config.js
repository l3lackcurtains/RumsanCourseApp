const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const detect = require('detect-port')
const portfinder = require('portfinder')

const DEFAULT_PORT = 3000

const config ={
  devtool: 'cheap-module-source-map',
  entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, 'src/index.js')
	],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader'
        ]
      }
    ]
  },
};

module.exports = config;