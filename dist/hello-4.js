"use strict";

function Hello() {
	var _this = this;

	this.hellower = "4";
	this.hello = function () {
		return "hello " + _this.hellower;
	};
}

// create new instance of Hello
// require doesn't "cache" same instance
// because this overrides exports as a Function Constructor
module.exports = Hello;