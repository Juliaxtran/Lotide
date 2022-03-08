
let emoji = String.fromCodePoint(0x1F621);
let emoji2 = String.fromCodePoint(128525);




let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];


const eqArrays = function (arr1, arr2) {
    for (let i = 0; i <= arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`${emoji}${emoji}${emoji}The Two Array are equal : fase`);
        }
    }
    console.log(`${emoji2}${emoji2}${emoji2}The Two Array are equal : true`);
}

console.log(eqArrays(arr1, arr2));