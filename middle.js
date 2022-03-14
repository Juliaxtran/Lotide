


const middle =  (arr) => {

    let result = [];
    if (arr.length <= 2) {
        return result;
    }


    if (arr.length % 2 !== 0) {
        result.push(arr[Math.floor(arr.length / 2)])


    }
    if (arr.length % 2 === 0) {
        result.push(arr[Math.floor((arr.length - 1) / 2)], arr[Math.floor((arr.length + 1) / 2)]);
    }

    return result;
}

modules.exports = middle;