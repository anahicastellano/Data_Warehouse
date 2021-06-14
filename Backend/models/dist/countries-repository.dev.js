"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    findOne = _require2.findOne;

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var salt = 10;

function insertNewCountry(newCountry) {
  var result;
  return regeneratorRuntime.async(function insertNewCountry$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    insert into countries  (name, regions_id)\n                values ( :name, :regions_id)\n", {
            replacements: newCountry,
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

function getCountriesByID(id) {
  return findOne("SELECT\n        countries.name as name,\n        regions.name as region_name,\n        regions.id as region_id\n        FROM countries\n        INNER JOIN regions ON regions.id = countries.regions_id\n        WHERE countries.id = :id\n        ", id, 'pais');
}

module.exports = {
  insertNewCountry: insertNewCountry,
  getCountriesByID: getCountriesByID
};