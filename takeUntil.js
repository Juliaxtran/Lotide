

const takeUntil = function(array, callback) {
  let results = [];
    for (item of array){
      if (callback(item) ){
        results = array.slice(0, array.indexOf(item));
      }
  }
  return results;
  }


module.exports = takeUntil;