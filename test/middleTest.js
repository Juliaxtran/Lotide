const middle = require('../middle.js');
const assert = require('chai').assert;

describe("Middle Test Cases", () => {
  it("returns an empty array, for arrays with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array, for arrays with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an array containing a single middle element, for arrys with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns an array containing containing two elements in the middle, for arrays with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
 
});