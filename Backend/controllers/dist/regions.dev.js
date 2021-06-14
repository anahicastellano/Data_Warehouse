"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    cleanTable = _require2.cleanTable,
    deleteResoueceById = _require2.deleteResoueceById,
    getResourceById = _require2.getResourceById;

var _require3 = require("../models/regions-repository"),
    insertNewRegion = _require3.insertNewRegion,
    getRegionsData = _require3.getRegionsData;

function clean() {
  return regeneratorRuntime.async(function clean$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cleanTable('regions'));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function create(req, res) {
  var newRegion;
  return regeneratorRuntime.async(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          newRegion = {
            name: req.body.name
          };
          _context2.t0 = res.status(201);
          _context2.next = 5;
          return regeneratorRuntime.awrap(insertNewRegion(newRegion));

        case 5:
          _context2.t1 = _context2.sent;
          _context2.t2 = {
            id: _context2.t1
          };

          _context2.t0.json.call(_context2.t0, _context2.t2);

          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t3 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t3.message
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function listAll(req, res) {
  var regions;
  return regeneratorRuntime.async(function listAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getRegionsData());

        case 2:
          regions = _context3.sent;
          res.json({
            regions: regions
          }).status(200);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function get(req, res) {
  var region;
  return regeneratorRuntime.async(function get$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getResourceById('regions', Number(req.params.id)));

        case 2:
          region = _context4.sent;
          res.json(region).status(200);

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
          return regeneratorRuntime.awrap(deleteResoueceById('regions', Number(req.params.id)));

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
  create: create,
  listAll: listAll,
  get: get,
  remove: remove
};