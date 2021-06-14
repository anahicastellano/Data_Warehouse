"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("../database"),
    db = _require2.db,
    cleanTable = _require2.cleanTable,
    getAllResources = _require2.getAllResources,
    deleteResoueceById = _require2.deleteResoueceById;

var _require3 = require("../models/contacts-repository"),
    insertNewContact = _require3.insertNewContact,
    getContactById = _require3.getContactById,
    updateContactData = _require3.updateContactData;

var _require4 = require("../models/preferences-repository"),
    insertNewPreference = _require4.insertNewPreference,
    getPreferencesByID = _require4.getPreferencesByID,
    deletePreferencesItems = _require4.deletePreferencesItems;

function clean() {
  return regeneratorRuntime.async(function clean$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cleanTable('contacts'));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(cleanTable('preferences'));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function deleteContactById(id) {
  return regeneratorRuntime.async(function deleteContactById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(deletePreferencesItems(id));

        case 2:
          _context2.next = 4;
          return regeneratorRuntime.awrap(deleteResoueceById('contacts', id));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function insertPreferences(contacts_id, preferences) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, preference, newPreference;

  return regeneratorRuntime.async(function insertPreferences$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('insertando preferencias');
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context3.prev = 4;
          _iterator = preferences[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context3.next = 14;
            break;
          }

          preference = _step.value;
          newPreference = {
            intrest: preference.intrest,
            channel: preference.channel,
            contacts_id: contacts_id
          };
          _context3.next = 11;
          return regeneratorRuntime.awrap(insertNewPreference(newPreference));

        case 11:
          _iteratorNormalCompletion = true;
          _context3.next = 6;
          break;

        case 14:
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context3.t0;

        case 20:
          _context3.prev = 20;
          _context3.prev = 21;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 23:
          _context3.prev = 23;

          if (!_didIteratorError) {
            _context3.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context3.finish(23);

        case 27:
          return _context3.finish(20);

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 16, 20, 28], [21,, 23, 27]]);
}

function create(req, res) {
  var contact, preferences, contacts_id;
  return regeneratorRuntime.async(function create$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          contact = {
            cities_id: req.body.cities_id,
            contact_name: req.body.contact_name,
            contact_email: req.body.contact_email,
            contact_adress: req.body.contact_adress,
            contact_phone: req.body.contact_phone
          };
          preferences = req.body.preferences;
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(insertNewContact(contact));

        case 5:
          contacts_id = _context4.sent;
          _context4.next = 8;
          return regeneratorRuntime.awrap(insertPreferences(contacts_id, preferences));

        case 8:
          res.status(201).json({
            id: contacts_id
          });
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](2);
          res.json({
            message: _context4.t0.message
          }).status(500);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 11]]);
}

function listAll(req, res) {
  var contacts;
  return regeneratorRuntime.async(function listAll$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getAllResources('contacts'));

        case 2:
          contacts = _context5.sent;
          res.status(200).json({
            contacts: contacts
          });

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function get(req, res) {
  var contact;
  return regeneratorRuntime.async(function get$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(getContactById(Number(req.params.id)));

        case 2:
          contact = _context6.sent;
          _context6.next = 5;
          return regeneratorRuntime.awrap(getPreferencesByID(contact.cities_id));

        case 5:
          contact.preferences = _context6.sent;
          res.json(contact).status(200);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
}

function remove(req, res) {
  return regeneratorRuntime.async(function remove$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(deleteContactById(Number(req.params.id)));

        case 2:
          res.status(200).end();

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function update(req, res) {
  var id, contact;
  return regeneratorRuntime.async(function update$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          id = Number(req.params.id);
          _context8.next = 3;
          return regeneratorRuntime.awrap(getContactById(id));

        case 3:
          contact = _context8.sent;
          contact.id = id;
          contact.cities_id = req.body.cities_id;
          contact.contact_name = req.body.contact_name;
          contact.contact_email = req.body.contact_email;
          contact.contact_adress = req.body.contact_adress;
          contact.contact_phone = req.body.contact_phone;
          _context8.next = 12;
          return regeneratorRuntime.awrap(updateContactData(contact));

        case 12:
          res.status(200).end();

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  });
}

module.exports = {
  clean: clean,
  create: create,
  listAll: listAll,
  get: get,
  update: update,
  remove: remove
};