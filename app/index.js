const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((_req, res) => {
  res.writeHead(200);
  res.end('Hello, world!');
});

server.listen(PORT, undefined, () => {
  console.log(`Listening on port ${PORT}`);
});
