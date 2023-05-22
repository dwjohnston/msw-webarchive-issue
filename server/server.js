

const http = require('http');
const { setDefaultHighWaterMark } = require('stream');

const server = http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.statusCode = 200;

    setTimeout(() => {
        res.setHeader('Content-Type', 'application/json');
        res.end('{"foo": "bar"}');
    }, 500)

  } else {
    res.statusCode = 404;


    setTimeout(() => {
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }, 600)

  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
