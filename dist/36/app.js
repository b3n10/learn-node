"use strict";

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Move() {
	this.message = "action...";
}

_util2.default.inherits(Move, _events2.default);

Move.prototype.action = function () {
	console.log(this.message);
	this.emit("jump");
};

Move.prototype.msg = function (txt) {
	this.emit("message", txt);
};

var j = new Move();

j.on("jump", function () {
	console.log("I am jumping !!!");
});
j.on("message", function (txt) {
	console.log("Passed parameter: " + txt);
});

j.action();
j.msg("Ben");