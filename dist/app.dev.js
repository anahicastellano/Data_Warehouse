"use strict";

var express = require("express");

var helmet = require("helmet");

var cors = require('cors');

var rateLimit = require("express-rate-limit");

var _require = require("./routes/authentication.js"),
    authenticateToken = _require.authenticateToken;

var routes = require("./routes/index.js");

var app = express();

if (!process.env.ACCESS_TOKEN_SECRET) {
  throw new Error("Please set ACCESS_TOKEN_SECRET before running app");
}

app.use(helmet());
app.use(cors());
app.use(authenticateToken);
app.use(express.json());
routes(app);
app.listen(process.env.PORT || 3000, function () {
  console.log("Api escuchando el puerto: 3000");
});
module.exports = app;