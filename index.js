function map(arr, callback) {
    let result = [];
    for (let i=0;i<arr.length;i++) {
        let e = arr[i];
        result.push(callback(e));
    }
    return result;
}

function reduce(arr, callback, start) {
    let result = (!!start) ? start : arr[0];
    let i = (!!start) ? 0 : 1;
    for (; i < arr.length; i++) {
        result = callback(arr[i], result);
    }
    return result;
}