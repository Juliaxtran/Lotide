

const findKeyByValue = function (obj, value) {
let keysArray = Object.keys(obj);
let valuesArray = Object.values(obj);
let index = valuesArray.indexOf(value);
    return keysArray[index];
};






module.exports = findKeyByValue;
