import EventEmitter from "events";
import util from "util";

function Move() {
	this.message = "action...";
}

util.inherits(Move, EventEmitter);

Move.prototype.action = function() {
	console.log(this.message);
	this.emit("jump");
};

Move.prototype.msg = function(txt) {
	this.emit("message", txt);
};

const j = new Move();

j.on("jump", function() {
	console.log("I am jumping !!!");
});
j.on("message", function(txt) {
	console.log("Passed parameter: " + txt);
});

j.action();
j.msg("Ben");
