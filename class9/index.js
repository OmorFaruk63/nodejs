const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { name, age, id } = req.query;
  res.send(`i am ${name} my age is ${age} my id ${id}`);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
