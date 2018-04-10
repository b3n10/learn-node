import Emitter from "./emitter";

const emtr = new Emitter();

emtr.on("add", ({a = 5, b = 4}) => {
	console.log(`Sum of ${a} and ${b} is ${a + b}`);
});

emtr.emit("add");
