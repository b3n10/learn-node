import EventEmitter from "events";

// same as: util.inherits(Appliance, EventEmitter);
export default class Appliance extends EventEmitter {
	constructor(manufacturer) {
		// same as: EventEmitter.call(this);
		super();
		this.manufacturer = manufacturer;
	}
	info({details = "None"} = {}) {
		console.log(`Appliance manufacturer: ${this.manufacturer}`);
		// run event "show_info"
		this.emit("show_info", details);
	}
}
