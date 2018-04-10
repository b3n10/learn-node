"use strict";

// module.exports returns as a function
var hello1 = require("./hello-1");
console.log(hello1());

// returns as an object
// accessing the property "hello" which is a function
var hello2 = require("./hello-2").hello;
console.log(hello2());

// returns object
var hello3 = require("./hello-3");
console.log(hello3.hello());
hello3.hellower = "edit 3.";

// but require caches same hello-3 object as above and doesn't create "new" object
var hello3b = require("./hello-3");
console.log(hello3b.hello());

// returns as a Function Constructor
var hello4 = require("./hello-4");
var hello4a = new hello4(); // create new instance of hello4
console.log(hello4a.hello());

var hello4b = new hello4(); // create new instance of hello4
hello4b.hellower = "4b";
console.log(hello4b.hello());

// returns as object with only attached method/property
// no option to modify other property from required file
var hello5 = require("./hello-5");
console.log(hello5.hello());

// const sayHello = require("./greet");
// console.log( sayHello((name) => "Hello " + name ) );

// const bark = require("./bark");
// bark.english();
// bark.tagalog();