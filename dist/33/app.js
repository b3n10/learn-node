"use strict";

var _emitter = require("./emitter");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emtr = new _emitter2.default();

emtr.on("add", function (_ref) {
	var _ref$a = _ref.a,
	    a = _ref$a === undefined ? 5 : _ref$a,
	    _ref$b = _ref.b,
	    b = _ref$b === undefined ? 4 : _ref$b;

	console.log("Sum of " + a + " and " + b + " is " + (a + b));
});

emtr.emit("add");