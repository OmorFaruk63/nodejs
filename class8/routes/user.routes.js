const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("<h1>i am get requist from login route</h1>");
});

router.get("/register", (req, res) => {
  res.send("<h1>i am get requist from register route</h1>");
});

module.exports = router;