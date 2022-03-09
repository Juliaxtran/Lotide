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

const without = function (arr, itemsToRemove) {
    let newArr = [...arr]
    for (let i = 0; i < newArr.length; i++) {
        for (let values of itemsToRemove) {
            if (newArr[i] === values) {
                let removedItem = newArr.indexOf(values);
                newArr.splice(removedItem, 1);
                
            }
        }

    }
    return newArr;
}


let source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let itemsToRemove = [4, 5, 6];
console.log(without(source, itemsToRemove));
