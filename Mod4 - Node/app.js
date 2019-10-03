const express = require("express");
const app = express();

const userRoutes = require("./routes/users");
const addUserRoutes = require("./routes/add-user");
const notFoundRoute = require("./routes/404");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/add-user", addUserRoutes.routes);
app.use(userRoutes);
app.use(notFoundRoute);

app.listen("3000");
