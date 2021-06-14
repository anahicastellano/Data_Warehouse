"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    findOne = _require2.findOne;

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var salt = 10;

function insertNewContact(contact) {
  var result;
  return regeneratorRuntime.async(function insertNewContact$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    insert into contacts (cities_id, contact_name, contact_email, contact_adress, contact_phone)\n    values (:cities_id, :contact_name, :contact_email, :contact_adress, :contact_phone)\n", {
            replacements: contact,
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

function updateContactData(contact) {
  return regeneratorRuntime.async(function updateContactData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    update contacts set \n    cities_id = :cities_id,\n    contact_name = :contact_name,\n    contact_email = :contact_email,\n    contact_adress = :contact_adress,\n    contact_phone = :contact_phone    \n    where id = :id\n", {
            replacements: contact,
            type: QueryTypes.UPDATE
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getContactById(id) {
  return findOne("SELECT\n        cities.id as cities_id,\n        contact_name,\n        contact_email,\n        contact_adress,\n        contact_phone\n        FROM contacts\n        INNER JOIN cities ON cities.id = contacts.cities_id\n        WHERE contacts.id = :id\n        ", id, 'contactos');
}

;
module.exports = {
  insertNewContact: insertNewContact,
  getContactById: getContactById,
  updateContactData: updateContactData
};