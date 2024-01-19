const http = require("http");
//console.log(http);
const port = 3000;
const hostname = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  res.writeHead(202, "Content-Type:text/plain");
  res.write("<h1>hello this is my first server</h1>");
  res.end();
});

myServer.listen(port, () =>
  console.log(`server is running at http://${hostname}:${port}`)
);

//01819231274;
