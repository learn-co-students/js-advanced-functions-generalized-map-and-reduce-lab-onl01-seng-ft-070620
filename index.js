function map(arr, fxn) {
    let newArr = []
    for (const val of arr) {
        newArr.push(fxn(val))
    }
    return newArr
}

function reduce(arr, fxn, startingPt = arr.shift()) {
    let value = startingPt
    for (const val of arr) {
        value = fxn(val, value)
    }
    return value
}