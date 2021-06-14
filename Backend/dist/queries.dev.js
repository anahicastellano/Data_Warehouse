"use strict";

var _require = require("sequelize"),
    QueryTypes = _require.QueryTypes;

var _require2 = require("./db"),
    db = _require2.db;

var jwt = require('jsonwebtoken');

var _require3 = require("express"),
    query = _require3.query;

var authorizationPassword = 'tma$Q$bG5xR52'; //users

function selectUserLogin(username, password, req, res) {
  var user, perfil, user_id;
  return regeneratorRuntime.async(function selectUserLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.query("SELECT * FROM users WHERE email = :username && password = :password", {
            replacements: {
              username: username,
              password: password
            },
            type: QueryTypes.SELECT
          }));

        case 2:
          user = _context.sent;
          perfil = user[0].perfil;
          user_id = user[0].user_id;
          res.status(200).json(Object.assign({}, {
            token: jwt.sign({
              username: username,
              perfil: perfil,
              user_id: user_id
            }, authorizationPassword)
          }, {
            perf: perfil
          }));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function validateLoginQuery(req, res, next) {
  var _req$body, username, password, user;

  return regeneratorRuntime.async(function validateLoginQuery$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db.query("SELECT * FROM users WHERE email = :username && password = :password", {
            replacements: {
              username: username,
              password: password
            },
            type: QueryTypes.SELECT
          }));

        case 3:
          user = _context2.sent;
          if (user[0]) next();else res.status(400).send("Invalid credentials").end();

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getUsers(req, res) {
  var users;
  return regeneratorRuntime.async(function getUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    SELECT user_id, firstname, lastname, email, perfil FROM users\n    ", {
            type: QueryTypes.SELECT
          }));

        case 2:
          users = _context3.sent;
          res.status(200).json(users);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function createUser(newUser, req, res) {
  var inserted, firstname, lastname, email;
  return regeneratorRuntime.async(function createUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(db.query("\n    INSERT INTO users (firstname, lastname, email, perfil, password)\n    VALUES (:firstname, :lastname, :email, :perfil, :password)\n    ", {
            replacements: newUser,
            type: QueryTypes.INSERT
          }));

        case 2:
          inserted = _context4.sent;
          firstname = newUser.firstname, lastname = newUser.lastname, email = newUser.email;
          res.status(201).json(Object.assign({}, {
            user_id: inserted[0]
          }, {
            firstname: firstname,
            lastname: lastname,
            email: email
          }, {
            perfil: "Básico"
          }));

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function validateEmailQuery(req, res, next) {
  var email, emails, emailArray;
  return regeneratorRuntime.async(function validateEmailQuery$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          email = req.body.email;
          _context5.next = 3;
          return regeneratorRuntime.awrap(db.query("SELECT email FROM users", {
            type: QueryTypes.SELECT
          }));

        case 3:
          emails = _context5.sent;
          emailArray = emails.map(function (user) {
            return user.email;
          });

          if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            if (emailArray.every(function (e) {
              return e != email;
            })) next();else res.status(400).send("The email already exists").end();
          } else res.status(400).send("The email is wrong").end();

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
}

module.exports = {
  selectUserLogin: selectUserLogin,
  validateLoginQuery: validateLoginQuery,
  validateEmailQuery: validateEmailQuery,
  getUsers: getUsers,
  createUser: createUser
};