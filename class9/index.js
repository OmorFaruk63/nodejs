const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  const nam = req.body.fullname;
  res.send(`<h1> wellcome ${nam}</h1>`);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
