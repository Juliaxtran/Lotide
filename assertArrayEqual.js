let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${emoji2}${emoji2}${emoji2}Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const eqArrays = function(array1, array2) {
    let output = true;
    if (array1.length !== array2.length) return false;
    for (let element = 0; element < array1.length; element += 1) {
      if (Array.isArray(array1[element]) || Array.isArray(array2[element])) {
        output = output && eqArrays(array1[element], array2[element]);
      } else if (array1[element] !== array2[element]) {
        output = output && false;
      }
    }
    return output;
  };
  

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${emoji2}${emoji2}${emoji2} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: ${arr1} !== ${arr2}`);
      }
    };

let arr1 = [1,2,3];
let arr2 = [1,2,3];

console.log(assertArraysEqual(arr1, arr2));