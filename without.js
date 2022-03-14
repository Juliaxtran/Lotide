
const without = function (arr, itemsToRemove) {
    let newArr = [...arr]
    for (let i = 0; i < newArr.length; i++) {
        for (let values of itemsToRemove) {
            if (newArr[i] === values) {
                let removedItem = newArr.indexOf(values);
                newArr.splice(removedItem, 1);
                
            }
        }

    }
    return newArr;
}


module.exports = without;
