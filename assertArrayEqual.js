const {assertEqual, emoji, emoji2} = require('./assertEqual');
const eqArrays = require('./eqArray.js')



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${emoji2}${emoji2}${emoji2} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: ${arr1} !== ${arr2}`);
      }
    };



module.exports = assertArraysEqual;