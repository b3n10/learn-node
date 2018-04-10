const hellower = "5";

const hello = () => `hello ${hellower}`;

// Revealing Module Pattern
// only attaching specific methods, properties
module.exports = { hello };
