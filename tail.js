

const tail = (words) => {
if (words.length < 1) {
  return [];
}
  return words.slice(1);
}


module.exports = tail;