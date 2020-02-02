require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("_helpers/jwt");
const errorHandler = require("_helpers/error-handler");
const mongoose = require("mongoose");
const config = require("config.json");
const db = mongoose.createConnection(config.connectionString);
const initializeDb = require("_helpers/initializeDb");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("./users/users.controller"));
app.use("/classes", require("./classes/classes.controller"));
app.use(
  "/db-initializer",
  require("./db-initializer/db-initializer.controller")
);

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function() {
  console.log("Server listening on port " + port);
  initializeDb(db);
});
