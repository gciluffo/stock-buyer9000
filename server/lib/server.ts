import app from './app';
import * as https from 'https';
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log('API listening on 3000');
});

module.exports = server;