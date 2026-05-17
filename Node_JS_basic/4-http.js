const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!\n');
});
const PORT = 1245;

app.listen(PORT);

module.exports = app;
