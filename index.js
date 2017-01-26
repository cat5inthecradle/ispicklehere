'use strict';

const http = require('http');
const port = 8080;
const app = require('./src/app.js'); // I would rather use the build version

const requestHandler = (request, response) => {
  console.log(request.url);
  console.log(app);

  function callback(error, content) {
    response.end(content.body);
  }

  app.isPickleHere({}, {}, callback);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
