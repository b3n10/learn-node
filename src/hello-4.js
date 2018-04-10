function Hello() {
	this.hellower = "4";
	this.hello = () => `hello ${this.hellower}`;
}

// create new instance of Hello
// require doesn't "cache" same instance
// because this overrides exports as a Function Constructor
module.exports = Hello;
