import Appliance from "./Appliance";

const app = new Appliance("Acer");
// add listener to event "show_info"
app.on("show_info", (details) => {
	console.log(`Details: ${details}`);
});
app.info({details: "Laptop"});
