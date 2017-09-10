const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'test'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
            plugins: [
              require('babel-plugin-transform-object-assign'),
              require('babel-plugin-transform-object-rest-spread'),
              require('babel-plugin-transform-async-to-generator'),
              require('babel-plugin-transform-class-properties'),
              require('babel-plugin-transform-flow-strip-types')
            ]
          }
        }
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.template.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
