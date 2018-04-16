import util from "util";

function Appliance(man) {
	this.manufacturer = man;
}

Appliance.prototype.info = function({ details = "None" } = {}) {
	console.log(`Appliance manufacturer is ${this.manufacturer}`);
	console.log(`Other appliance details: ${details}`);
};

function Fan() {
	Appliance.call(this, "Sony");
	this.blades = 4;
}

// util.inherits attaches methods and properties, but doesn't run the constructor of the prototype
// and so
// Appliance.call(this, "Sony");
// needs to be invoked to run constructor and add values to properties
util.inherits(Fan, Appliance);

const fan1 = new Fan();
fan1.info({ details: `${fan1.blades} blades`});
