let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${emoji2}${emoji2}${emoji2}Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const eqArrays = function (arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}


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