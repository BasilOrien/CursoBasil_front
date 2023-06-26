"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.userSlice = exports.fetchLocalUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchLocalUser = (0, _toolkit.createAsyncThunk)('fetchLocalUser', function _callee() {
  var axiosResponse, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("".concat(process.env.REACT_APP_API_URL, "/user/userdata"), {
            withCredentials: true
          }));

        case 2:
          axiosResponse = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(axiosResponse.data);

        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchLocalUser = fetchLocalUser;
var initialState = {
  userdata: []
};
var userSlice = (0, _toolkit.createSlice)({
  name: "localUserData",
  initialState: initialState,
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchLocalUser.fulfilled, function (state, _ref) {
      var payload = _ref.payload;
      state.userdata = payload;
    });
  }
});
exports.userSlice = userSlice;
var _default = userSlice.reducer;
exports["default"] = _default;