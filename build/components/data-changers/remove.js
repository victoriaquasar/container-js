"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = void 0;

var _recursiveComparator = require("../../lib/recursiveComparator.js");

var remove = (reference, target) => {
  var result;

  switch (reference.type()) {
    case "Array":
      result = [];
      reference.content().forEach(element => {
        if (!(0, _recursiveComparator.compare)(element, target)) {
          result.push(element);
        }
      });
      reference.set(result);
      break;

    case "Object":
      result = {};
      Object.entries(reference.content()).forEach(entry => {
        if (!(0, _recursiveComparator.compare)(entry[1], target)) {
          result[entry[0]] = entry[1];
        }
      });
      reference.set(result);
      break;

    case "Map":
      result = new Map();
      reference.content().forEach(value, key => {
        if (!(0, _recursiveComparator.compare)(reference.content().get(key), target)) {
          result.set(key, value);
        }
      });
      reference.set(result);
      break;

    case "Set":
      result = [];
      Array.from(reference.content()).forEach(element => {
        if (!(0, _recursiveComparator.compare)(element, target)) {
          result.push(element);
        }
      });
      reference.set(new Set(result));
      break;

    case "String":
      reference.set(reference.content().replaceAll(target, ""));
      break;
  }

  return reference.content();
};

exports.remove = remove;