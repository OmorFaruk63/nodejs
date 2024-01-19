const http = require("http");
const fs = require("fs");
const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileName) => {
    fs.readFile(fileName, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleReadFile(200, "home.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "contact.html");
  } else {
    handleReadFile(200, "notfound.html");
  }
});

server.listen(port, hostName, () => {
  console.log(`server running at  http://${hostName}:${port}`);
});
