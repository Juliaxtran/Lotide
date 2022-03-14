
const eqArrays = require('./eqArray.js')


let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${emoji2}${emoji2}${emoji2} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: ${arr1} !== ${arr2}`);
      }
    };



module.exports = assertArraysEqual;