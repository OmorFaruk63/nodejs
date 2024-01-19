const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + `/home.html`);
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + `/circle.html`);
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + `/triangle.html`);
});

app.post("/triangle", (req, res) => {
  const heig = req.body.height;
  const bas = req.body.base;
  const aria = 0.5 * heig * bas;
  res.send(`aria of triangle ${aria}`);
});
app.post("/circle", (req, res) => {
  const radi = req.body.radius;
  const aria = 0.5 * heig * bas;
  res.send(`aria of circle ${aria}`);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
