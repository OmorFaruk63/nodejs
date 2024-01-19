const express = require("express");
const app = express();
const router = require("./routes/user.routes.js");

app.use("/api/user", router);
app.get("/", (req, res) => {
  res.send("<h1>i am get requist from home route</h1>");
});
app.get("/home", (req, res) => {
  res.status(200).sendFile(__dirname + "/home.html");
  //res.cookie("fname", "omor");
  //res.cookie("lname", "faruk");
  //res.cookie("age", "30");
  res.clearCookie("age");
});

app.use((req, res) => {
  res.send("<h1>404 page not found</h1>");
});

//app.post("/", (req, res) => {
//  res.send("i am post requist from home route");
//});

//app.put("/", (req, res) => {
//  res.send("i am put requist from home route");
//});

//app.delete("/", (req, res) => {
//  res.send("i am delete requist from home route");
//});

module.exports = app;
