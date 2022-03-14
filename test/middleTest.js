const middle = require('../middle.js');
const assertArraysEqual = require('../assertArrayEqual')

let numbers = [1]
let numbers2 = [1,2]
let numbers3 = [1, 2, 3]
let numbers4 = [1, 2, 3, 4, 5]
let numbers5 =[1, 2, 3, 4]
let numbers6 = [1, 2, 3, 4, 5, 6]
// For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle(numbers),[]);
assertArraysEqual(middle(numbers2),[]);
//For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle(numbers3),[2]);
assertArraysEqual(middle(numbers4),[3]);
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle(numbers5),[2, 3]);
assertArraysEqual(middle(numbers6),[3, 4]);
