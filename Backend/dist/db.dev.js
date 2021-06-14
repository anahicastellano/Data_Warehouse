"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize,
    HostNotFoundError = _require.HostNotFoundError;

var db = new Sequelize("data_ware", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});
module.exports = {
  db: db
};