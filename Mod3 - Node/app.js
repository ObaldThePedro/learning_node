const express = require("express");
const path = require("path");
const app = express();
const homeRoute = require("./routes/homeRoute");
const dogsRoute = require("./routes/dogsRoutes");
const notFoundRoute = require("./routes/notFoundRoute");

app.use(express.static(path.join(__dirname, "public")));

app.use("/dogs", dogsRoute);
app.use(homeRoute);
app.use(notFoundRoute);

app.listen(3000);
