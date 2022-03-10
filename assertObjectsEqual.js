let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${emoji2}${emoji2}${emoji2}Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertEqual();


const eqObjects = function (ob1,ob2) {
    const keyOfObj1 = Object.keys(ob1);
    const keyOfObj2 = Object.keys(ob2);


    if (keyOfObj1.length !== keyOfObj2.length){
        return false;
    } else {
        for (const key of keyOfObj1) {
            if (Array.isArray(ob1[key])) {
                return eqArrays(ob1[key],ob2[key]);

            } else if (ob1[key] !== ob2[key]){
                return false;
                
            }
        }

    }
    return true;
};

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; 
    if (eqObjects(actual, expected)) {
      console.log(`${emoji2}${emoji2}${emoji2}Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`${emoji}${emoji}${emoji} node assertObjectsEqual.jsAssertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };

  assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true); // => true

