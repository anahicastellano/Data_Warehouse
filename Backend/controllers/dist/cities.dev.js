"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    cleanTable = _require2.cleanTable,
    getAllResources = _require2.getAllResources,
    deleteResoueceById = _require2.deleteResoueceById;

var _require3 = require("../models/cities-repositories"),
    insertNewCity = _require3.insertNewCity,
    getCityByID = _require3.getCityByID;

function clean() {
  return regeneratorRuntime.async(function clean$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cleanTable('cities'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function create(req, res) {
  var city, cities_id;
  return regeneratorRuntime.async(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          city = {
            name: req.body.name,
            countries_id: req.body.countries_id
          };
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(insertNewCity(city));

        case 4:
          cities_id = _context2.sent;
          res.json({
            id: cities_id
          }).status(201);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.json({
            message: _context2.t0.message
          }).status(500);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}

function listAll(req, res) {
  var cities;
  return regeneratorRuntime.async(function listAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getAllResources('cities'));

        case 2:
          cities = _context3.sent;
          res.json({
            cities: cities
          }).status(200);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function get(req, res) {
  var city;
  return regeneratorRuntime.async(function get$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(getCityByID(Number(req.params.id)));

        case 3:
          city = _context4.sent;
          res.json(city).status(200);
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(404).end();

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

function remove(req, res) {
  return regeneratorRuntime.async(function remove$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(deleteResoueceById('cities', Number(req.params.id)));

        case 3:
          res.status(200).end();
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.status(400).json({
            message: "No se puede eliminar. Verificá que ciudad no esté en uso"
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

module.exports = {
  clean: clean,
  create: create,
  listAll: listAll,
  get: get,
  remove: remove
};