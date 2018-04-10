"use strict";

function Hello() {
	var _this = this;

	this.hellower = "3";
	this.hello = function () {
		return "hello " + _this.hellower;
	};
}

// create new instance of Hello, override exports object
// but require "caches" same instance
module.exports = new Hello();