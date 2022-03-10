
let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(` ${emoji2}${emoji2}${emoji2}ssertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
    }
};


let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];


const eqArrays = function (arr1, arr2) {
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log(eqArrays(arr1, arr2));

