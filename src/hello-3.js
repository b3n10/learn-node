function Hello() {
	this.hellower = "3";
	this.hello = () => `hello ${this.hellower}`;
}

// create new instance of Hello, override exports object
// but require "caches" same instance
module.exports = new Hello();
