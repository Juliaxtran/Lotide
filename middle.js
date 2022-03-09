


// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(` ${emoji2}${emoji2}${emoji2}Assertion Passed: [${actual}] === [${expected}]`);
//     } else {
//       console.log(`${emoji}${emoji}${emoji}Assertion Failed: [${actual}] !== [${expected}]`);
//     }
//   };

//   const eqArrays = function (arr1, arr2) {
//     for (let i = 0; i <= arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {

//             console.log(`${emoji}${emoji}${emoji}The Two Array are equal : fase`);
//         }
//     }
//     console.log(`${emoji2}${emoji2}${emoji2}The Two Array are equal : true`);
// }

// console.log(eqArrays(arr1, arr2));



const middle = function (arr) {

    let result = [];
    if (arr.length <= 2) {
        return result;
    }


    if (arr.length % 2 !== 0) {
        result.push(arr[Math.floor(arr.length / 2)])


    }
    if (arr.length % 2 === 0) {
        result.push(arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor((arr.length + 1) / 2)]);
    }

    return result;
}


console.log(middle([1]));
const values = [1, 2, 3];
console.log(middle(values));
console.log(middle([1, 2, 3, 4, 5, 6]));


// how do i get the two middle options of an array if it is even 
// middle([1, 2, 3, 4]) // => [2, 3] 
// arr.length / 2 - 1

// arr.slice(1,3);
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// arr.length / 2 = 3
// arr.slice(2, 4);