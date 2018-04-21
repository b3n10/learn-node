"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// syntactic sugar to create function constructor
// doesn't change things "under the hood"
// only better syntax
// class in JS is not the same as classes in other programming languages
var Appliance = function () {
	// same as:
	// function Appliance(man) {
	// 	this.manufacturer = man;
	// }
	function Appliance(man) {
		_classCallCheck(this, Appliance);

		this.manufacturer = man;
	}
	// method you add inside classes are added to the prototype
	// same as: Appliance.prototype.info


	_createClass(Appliance, [{
		key: "info",
		value: function info() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref$details = _ref.details,
			    details = _ref$details === undefined ? "None" : _ref$details;

			console.log("Appliance manufacturer is " + this.manufacturer);
			console.log("Other appliance details: " + details);
		}
	}]);

	return Appliance;
}();

var app = new Appliance("Samsung");
app.info({ details: "TV" });