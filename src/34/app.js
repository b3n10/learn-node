// call buit-in events.js
import Emitter from "events";
import config from "./config";

const emtr = new Emitter();

emtr.on(config.events.HI, function() {
	console.log("say hi...");
});

emtr.emit("hi hello");
