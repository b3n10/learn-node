"use strict";

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Appliance(man) {
	this.manufacturer = man;
}

Appliance.prototype.info = function () {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref$details = _ref.details,
	    details = _ref$details === undefined ? "None" : _ref$details;

	console.log("Appliance manufacturer is " + this.manufacturer);
	console.log("Other appliance details: " + details);
};

function Fan() {
	Appliance.call(this, "Sony");
	this.blades = 4;
}

// util.inherits attaches methods and properties, but doesn't run the constructor of the prototype
// and so
// Appliance.call(this, "Sony");
// needs to be invoked to run constructor and add values to properties
_util2.default.inherits(Fan, Appliance);

var fan1 = new Fan();
fan1.info({ details: fan1.blades + " blades" });