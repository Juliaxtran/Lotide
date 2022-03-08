
let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${emoji2}${emoji2}${emoji2}ssertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Favourite", "Spice");