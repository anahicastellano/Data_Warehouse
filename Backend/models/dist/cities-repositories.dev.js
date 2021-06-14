"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    findOne = _require2.findOne;

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var salt = 10;

function insertNewCity(newCity) {
  var result;
  return regeneratorRuntime.async(function insertNewCity$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    insert into cities  (name, countries_id)\n                values ( :name, :countries_id)\n", {
            replacements: newCity,
            type: QueryTypes.INSERT
          }));

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result[0]);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getCityByID(id) {
  return findOne("SELECT\n        cities.name as name,\n        countries.name as countries_name,\n        countries.id as countries_id\n        FROM cities\n        INNER JOIN countries ON countries.id = cities.countries_id\n        WHERE cities.id = :id\n        ", id, 'ciudad');
}

module.exports = {
  insertNewCity: insertNewCity,
  getCityByID: getCityByID
};