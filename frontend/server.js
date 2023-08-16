const http = require('http');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // Obsługa żądań GET
  if (req.method === 'GET') {
    let filePath = '.' + req.url;
    if (filePath === './') {
      filePath = './frontend/index.html';
    }

    const contentType = getContentType(filePath);

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.js':
      return 'text/javascript';
    case '.css':
      return 'text/css';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpg';
    case '.html':
      return 'text/html';
    default:
      return 'text/plain';
  }
}
