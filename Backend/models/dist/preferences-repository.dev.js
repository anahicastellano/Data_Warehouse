"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db;

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var salt = 10;

function insertNewPreference(preferences) {
  var result;
  return regeneratorRuntime.async(function insertNewPreference$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    insert into preferences (intrest, channel, contacts_id) \n    values (:intrest, :channel, :contacts_id)\n", {
            replacements: preferences,
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

function getPreferencesByID(contacts_id) {
  var preferences;
  return regeneratorRuntime.async(function getPreferencesByID$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db.query("SELECT\n    contacts.id as contacts_id, \n    intrest, \n    channel\n    FROM preferences\n    INNER JOIN contacts ON contacts.id = preferences.contacts_id\n    WHERE contacts.id = :contacts_id\n    ", {
            replacements: {
              contacts_id: contacts_id
            },
            type: QueryTypes.SELECT
          }));

        case 2:
          preferences = _context2.sent;
          return _context2.abrupt("return", preferences);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

;

function deletePreferencesItems(id) {
  return regeneratorRuntime.async(function deletePreferencesItems$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(db.query("delete from preferences where contacts_id = :id", {
            replacements: {
              id: id
            },
            type: QueryTypes.DELETE
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}

module.exports = {
  insertNewPreference: insertNewPreference,
  getPreferencesByID: getPreferencesByID,
  deletePreferencesItems: deletePreferencesItems
};