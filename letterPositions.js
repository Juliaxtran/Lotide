
let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` ${emoji2}${emoji2}${emoji2}ssertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
  }
};




const letterPositions = function (sentence) {
    let results = {};
    
    for (let letter of sentence) {
        if (results[letter]) {
            results.push.indexOf(letter);
         

        } else {
            results.push.indexOf(letter) ;
        
        }

    }
    return results;
}



console.log(letterPositions("LHL"));
