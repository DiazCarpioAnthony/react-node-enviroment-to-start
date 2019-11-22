import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

// initializing packages
const app = express();
const path = require('path');

// settings
app.set('port', process.env.PORT || 3000);

// middlwares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// static files
app.use(express.static(path.join(__dirname, 'public'))); //Como no encuentra la ruta la vamos a setear con la direccion global

// routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api', (req, res) => {
  res.json({api: 'works!'});
});

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
