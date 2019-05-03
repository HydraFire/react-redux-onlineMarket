// start
const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);


app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(7777, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7777');
});
