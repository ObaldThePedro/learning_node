const express = require("express");
const router = express.Router();
const usersData = require("./add-user");

router.get("/users", (req, res, next) => {
  res.render("users", { users: usersData.users, pageTitle: "Users" });
});

module.exports = router;
