// syntactic sugar to create function constructor
// doesn't change things "under the hood"
// only better syntax
// class in JS is not the same as classes in other programming languages
class Appliance {
	// same as:
	// function Appliance(man) {
	// 	this.manufacturer = man;
	// }
	constructor(man) {
		this.manufacturer = man;
	}
	// method you add inside classes are added to the prototype
	// same as: Appliance.prototype.info
	info({details = "None"} = {}) {
		console.log(`Appliance manufacturer is ${this.manufacturer}`);
		console.log(`Other appliance details: ${details}`);
	}
}

const app = new Appliance("Samsung");
app.info({details: "TV"});
