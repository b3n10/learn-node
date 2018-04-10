"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function Emitter() {
	this.events = {};
}

Emitter.prototype.on = function (type, listener) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
	if (this.events[type]) this.events[type].forEach(function (fn) {
		return fn({ a: 10 });
	});
};

exports.default = Emitter;