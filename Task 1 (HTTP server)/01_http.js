const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  if (req.url === '/') {
    const now = new Date();
    const response = {
      date: now.toDateString(),
      time: now.toTimeString()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
