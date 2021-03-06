"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skip = void 0;

//Todo: Add suport to Map and String constructors
var skip = (content, type, quantity) => {
  var result;

  switch (type) {
    case "Array":
      result = [];
      content.forEach(element => {
        if (quantity <= 0) {
          result.push(element);
        } else {
          quantity--;
        }
      });
      return result;

    case "Object":
      result = {};
      Object.entries(content).forEach(element => {
        if (quantity <= 0) {
          result[element[0][0]] = element[0][1];
        } else {
          quantity--;
        }
      });
      return result;

    case "Set":
      result = [];
      Array.from(content).forEach(element => {
        if (quantity <= 0) {
          result.push(element);
        } else {
          quantity--;
        }
      });
      return new Set(result);
  }
};

exports.skip = skip;