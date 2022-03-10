

let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);


const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(` ${emoji2}${emoji2}${emoji2}ssertion Passed: [${actual}] === [${expected}]`);
    } else {
        console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
    }
};

const eqArrays = function (arr1, arr2) {
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`${emoji}${emoji}${emoji}The Two Array are equal : fase`);
        }
    }
    console.log(`${emoji2}${emoji2}${emoji2}The Two Array are equal : true`);
}




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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false