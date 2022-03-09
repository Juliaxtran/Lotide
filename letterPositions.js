
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




const letterPositions = function (sentence) {
    let newSentence = sentence.toLowerCase()
    const results = {};
    for (let i = 0; i < newSentence.length; i++) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
    return results;
  };


console.log(letterPositions("Lighthouselabs"));
