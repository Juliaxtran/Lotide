
let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${emoji2}${emoji2}${emoji2}ssertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const head = function(array){
     return array[0];
}


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");