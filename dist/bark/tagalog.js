"use strict";

var barking = require("./barking");
var arf = function arf() {
  return console.log(barking.ta);
};

module.exports = arf;