const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;

app.get("/api/pemas", (req, res) => {
  res.send("Hello World!");
});

app.get("/youtube", (req, res) => {
  res.send("Welcome to youtube server");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
