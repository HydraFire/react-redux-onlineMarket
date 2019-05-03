const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  entry: [
  'webpack-hot-middleware/client?path=http://localhost:7777/__webpack_hmr&reload=true',
  './src/index.js'
  ],
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },
  mode: 'development',
  plugins: [
    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    
    // env plugin

    new webpack.DefinePlugin({
      'process.env.HOSTNAME': JSON.stringify(process.env.HOSTNAME)
    })
    */
     new webpack.HotModuleReplacementPlugin()
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/react', '@babel/preset-env'] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
