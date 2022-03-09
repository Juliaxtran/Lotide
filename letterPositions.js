
const letterPositions = function (sentence) {
  let newSentence = sentence.toLowerCase();
    let results = {};
    let index = 0;
    
    for (const letter of newSentence) {
        if (results[letter]) {
            results[letter].push(index);
         
        } else {
            results[letter] = [index];
        
        }
  index++
    }
    return results;
}



console.log(letterPositions("Lighthouselabs"));
