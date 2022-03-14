const tail = require('../tail.js');
const assertEqual = require('../assertEqual');


//Test Case
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
// Tail function Returning a new array and not modify the original that is passed 
tail(words); 
assertEqual(words.length, 3)
// An array with one one element should yeild an empty array for its tail

const result2 = tail(oneElem);
assertEqual(result2,[]);
// An empty array should yield an empty array for its tail
const emptyArray = [];
assertEqual(result3,[]);

// Computer is detecting array as objects 