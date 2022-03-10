
let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(` ${emoji2}${emoji2}${emoji2}Assertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
    }
};




const findKey = function (obj, callback) {
    for (key in obj) {
        if (callback(obj[key])) return key
    }

};




results1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 3)


results2 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 1)


results3 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2)


console.log(assertEqual(results1, "Akaleri"));
console.log(assertEqual(results2, "Blue Hill"));
console.log(assertEqual(results3, "noma"));