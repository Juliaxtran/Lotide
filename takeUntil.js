

const takeUntil = function(array, callback) {
  let results = [];
    for (item of array){
      if (callback(item) ){
        results = array.slice(0, array.indexOf(item));
      }
  }
  return results;
  }


let pets = ["Sam","Robert","Tom", "Dave" ];
const results1 = takeUntil(pets, pet => pet === "Tom");
console.log(results1);

const results2 = takeUntil(pets, pet => pet === "Robert");
console.log(results2);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data2, x => x === ',');
console.log(results3);