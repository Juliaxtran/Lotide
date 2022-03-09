
const flatten = function(array) {
    let flattenedArray = [];
    for (let i = 0; i < array.length; i++) {
        console.log("Step", i);
      if (Array.isArray(array[i])) {
        for (const element of array[i]) {
          flattenedArray.push(element);
          console.log("Step 2", flattenedArray);
        }
      } else {
        flattenedArray.push(array[i]);
        console.log("Step 3", flattenedArray);
      }
    }
    return flattenedArray;
  };
  
console.log(flatten[[0,3,4],4,6,7,[2,4]]);

//Psuedo Code
// create a function flatten 
// return an empty array 
// the input will have nested arrays 
// loop through array 
// find where the array is 
// use .isArray() ?
// join the arrays neatly 


