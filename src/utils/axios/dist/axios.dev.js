"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.logout = logout;
exports.checkSession = checkSession;
exports.sendVerifyCode = sendVerifyCode;
exports.verifyCode = verifyCode;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function register(firstName, lastName, username, mail, password) {
  var axiosPost, data;
  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.REACT_APP_API_URL, "/user/register"), {
            firstName: firstName,
            lastName: lastName,
            username: username,
            mail: mail,
            password: password
          }));

        case 2:
          axiosPost = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(axiosPost.data);

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function login(username, password) {
  var axiosLogin, data;
  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.REACT_APP_API_URL, "/user/login"), {
            username: username,
            password: password
          }, {
            withCredentials: true
          }));

        case 2:
          axiosLogin = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(axiosLogin.data);

        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", data);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function logout() {
  var response, data;
  return regeneratorRuntime.async(function logout$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          localStorage.removeItem("storage_type");
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.REACT_APP_API_URL, "/user/logout"), {}, {
            withCredentials: true
          }));

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(response.data);

        case 6:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function checkSession() {
  var axiosCheckSession, data;
  return regeneratorRuntime.async(function checkSession$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_API_URL, "/check_session"), {
            withCredentials: true
          }));

        case 2:
          axiosCheckSession = _context4.sent;
          _context4.next = 5;
          return regeneratorRuntime.awrap(axiosCheckSession.data);

        case 5:
          data = _context4.sent;
          return _context4.abrupt("return", data);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function sendVerifyCode() {
  var axiosGet, data;
  return regeneratorRuntime.async(function sendVerifyCode$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_API_URL, "/user/setverify"), {
            withCredentials: true
          }));

        case 2:
          axiosGet = _context5.sent;
          _context5.next = 5;
          return regeneratorRuntime.awrap(axiosGet.data);

        case 5:
          data = _context5.sent;
          return _context5.abrupt("return", data);

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function verifyCode(code) {
  var axiosPost, data;
  return regeneratorRuntime.async(function verifyCode$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.REACT_APP_API_URL, "/user/verifyCode"), {
            verifyCode: code
          }, {
            withCredentials: true
          }));

        case 2:
          axiosPost = _context6.sent;
          data = axiosPost.data;
          return _context6.abrupt("return", data);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
}