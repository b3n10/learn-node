"use strict";

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// call buit-in events.js
var emtr = new _events2.default();

emtr.on(_config2.default.events.HI, function () {
	console.log("say hi...");
});

emtr.emit("hi hello");