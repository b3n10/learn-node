"use strict";

var _Appliance = require("./Appliance");

var _Appliance2 = _interopRequireDefault(_Appliance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _Appliance2.default("Acer");
// add listener to event "show_info"
app.on("show_info", function (details) {
	console.log("Details: " + details);
});
app.info({ details: "Laptop" });