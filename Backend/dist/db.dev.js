"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var db = new Sequelize("data_ware", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});
module.exports = {
  db: db
};