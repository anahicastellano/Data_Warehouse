"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    cleanTable = _require2.cleanTable,
    getAllResources = _require2.getAllResources,
    deleteResoueceById = _require2.deleteResoueceById;

var _require3 = require("../models/countries-repository"),
    insertNewCountry = _require3.insertNewCountry,
    getCountriesByID = _require3.getCountriesByID;

function clean() {
  return regeneratorRuntime.async(function clean$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cleanTable('countries'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function create(req, res) {
  var countries, countries_id;
  return regeneratorRuntime.async(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          countries = {
            name: req.body.name,
            regions_id: req.body.regions_id
          };
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(insertNewCountry(countries));

        case 4:
          countries_id = _context2.sent;
          res.status(201).json({
            id: countries_id
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}

function listAll(req, res) {
  var countries;
  return regeneratorRuntime.async(function listAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getAllResources('countries'));

        case 2:
          countries = _context3.sent;
          res.json({
            countries: countries
          }).status(200);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function get(req, res) {
  var country;
  return regeneratorRuntime.async(function get$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getCountriesByID(Number(req.params.id)));

        case 2:
          country = _context4.sent;
          res.json(country).status(200);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function remove(req, res) {
  return regeneratorRuntime.async(function remove$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(deleteResoueceById('countries', Number(req.params.id)));

        case 2:
          res.status(200).end();

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}

module.exports = {
  clean: clean,
  listAll: listAll,
  create: create,
  get: get,
  remove: remove
};