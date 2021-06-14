"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db;

function insertNewRegion(newRegion) {
  var result;
  return regeneratorRuntime.async(function insertNewRegion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    insert into regions (name)\n                values (:name)\n", {
            replacements: newRegion,
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

function getRegionsData() {
  return regeneratorRuntime.async(function getRegionsData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db.query("select id, name from regions", {
            type: QueryTypes.SELECT
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  insertNewRegion: insertNewRegion,
  getRegionsData: getRegionsData
};