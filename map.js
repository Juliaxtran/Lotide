//input 1. array to map
// a call back function 

let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const eqArrays = function (arr1, arr2) {
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`${emoji}${emoji}${emoji}The Two Arrays are equal : false`);
        }
    }
    console.log(`${emoji2}${emoji2}${emoji2}The Two Arrays are equal : true`);
}




const map = function(array, callback) {
    const results = [];
    for (let item of array) {
     results.push(callback(item))
    }
    return results;
  }

module.exports = map;
  
