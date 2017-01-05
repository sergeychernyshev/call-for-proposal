import express from 'express';
import webpack from 'webpack';

import webpackMiddleware from 'webpack-dev-middleware';

import path from 'path'

import config from '../webpack.config.js'

let app = express()
app.use('/js/', express.static('js'));
app.use('/css/', express.static('css'));

app.use(webpackMiddleware(webpack(config), {
  noInfo: true,
  publicPath: config.output.path
}));

// HTML
app.get('/', (request, response) => {
  response.sendFile(path.dirname(__dirname) + '/index.html');
});

let server = app.listen(8080, 'localhost', () => {
  let host = server.address().address;
  let port = server.address().port;

  console.warn('SpeakerForce Call for Proposals app listening at http://%s:%s/', host, port);
});
