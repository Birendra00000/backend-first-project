const express = require("express");
const mainRoutes = express.Router();

mainRoutes.get("/response1", (req, res) => {
  res.send("This is Response 1");
});

mainRoutes.post("/response2", (req, res) => {
  res.send("This is response2");
});

module.exports = mainRoutes;
