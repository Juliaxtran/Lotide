const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray.js')

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "3", "3", "5"], ["1", "2", "3"]), false);