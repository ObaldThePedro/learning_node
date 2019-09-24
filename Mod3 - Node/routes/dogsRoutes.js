const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/all-dogs", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "dogs.html"));
});

module.exports = router;
