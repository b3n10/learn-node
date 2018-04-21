"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// same as: util.inherits(Appliance, EventEmitter);
var Appliance = function (_EventEmitter) {
	_inherits(Appliance, _EventEmitter);

	function Appliance(manufacturer) {
		_classCallCheck(this, Appliance);

		var _this = _possibleConstructorReturn(this, (Appliance.__proto__ || Object.getPrototypeOf(Appliance)).call(this));
		// same as: EventEmitter.call(this);


		_this.manufacturer = manufacturer;
		return _this;
	}

	_createClass(Appliance, [{
		key: "info",
		value: function info() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref$details = _ref.details,
			    details = _ref$details === undefined ? "None" : _ref$details;

			console.log("Appliance manufacturer: " + this.manufacturer);
			// run event "show_info"
			this.emit("show_info", details);
		}
	}]);

	return Appliance;
}(_events2.default);

exports.default = Appliance;