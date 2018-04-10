"use strict";

var hellower = "5";

var hello = function hello() {
  return "hello " + hellower;
};

// Revealing Module Pattern
// only attaching specific methods, properties
module.exports = { hello: hello };