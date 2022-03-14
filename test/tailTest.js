const tail = require('../tail.js');
const assert = require('chai').assert;



describe("Tail Test", () => {
  it("returns ['Lighthouse','Labs] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse','Labs']);
  });
  it("returns ['Easter','Day','Christmas'] for ['Halloween', 'Easter', 'Day', 'Christmas']", () => {
    assert.deepEqual(tail(['Halloween', 'Easter', 'Day', 'Christmas']), ['Easter','Day','Christmas']);
  });
  it("An array with one one element should yeild an empty array for its tail", () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it(" An empty array should yield an empty array for its tail", () => {
    assert.deepEqual(tail([]), []);
  });

});