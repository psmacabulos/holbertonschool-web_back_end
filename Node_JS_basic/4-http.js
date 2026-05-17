const http = require('http');

const app = http.createServer((req, res) => {
  // set header
  res.writeHead(200, { 'content-type': 'text/plain' });
  // set the body
  res.end('Hello Holberton School!');
});
const PORT = 1245;

app.listen(PORT);

module.exports = app;
