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

const j = new Move();

j.on("jump", function() {
	console.log("I am jumping !!!");
});

j.action();
