

const eqArrays = require('../eqArray.js');
const assertArraysEqual = require('../assertArrayEqual');

let arr1 = [1,2,3];
let arr2 = [1,2,3];
let arr3 = [1,3,4];
let arr4 = [1,2,3];
let arr5 = [1,2,3,4,5]


assertArraysEqual(arr1,arr2); // pass
assertArraysEqual(arr3,arr4); //fail
assertArraysEqual(arr5,arr1);
