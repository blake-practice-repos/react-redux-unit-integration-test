
const path = require('path');

module.exports = {
  entry: path.resolve('./public/src'),
  output: {
    path: path.resolve('./public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: [/\.css$/, /\.scss$/],
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        
      },
      {
        test: /\.(gif|png|jpe?g|svg|pdf|ttf)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  mode: 'development',
  optimization: {
    minimize: true
  },
}