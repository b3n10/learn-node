"use strict";

var obj = {
	name: "Ethan",
	eat: function eat() {
		console.log("I don't want to eat this " + this.name);
	}
};

obj.eat();
obj.eat.call({ name: "Ben" });
obj.eat.apply({ name: "Darlyn" });