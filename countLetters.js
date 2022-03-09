const countLetters = function (str) {
    let results = {};
    
    for (letter of str) {
        if (results[letter]) {
            results[letter] += 1;
         

        } else {
            (results[letter]) = 1;
        
        }

    }
    return results;
}



console.log(countLetters("LHL"));

