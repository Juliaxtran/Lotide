let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(` ${emoji2}${emoji2}${emoji2}ssertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };
  
  const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (const item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
          console.log(results);
        } else {
          results[item] = 1;
        }
      }
    }
    return results;
  };
  


// Test Function 
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
