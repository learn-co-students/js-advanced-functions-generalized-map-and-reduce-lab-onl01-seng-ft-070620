// Add your functions here

function map(array, func){
    let result = []
    for (let i=0; i < array.length; i++){
        result.push(func(array[i]))
    }
    return result
}

function reduce(array, func, startingValue){
    let result = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1
    for (; i < array.length; i++){
        result = func(array[i], result)
    }
    return result
}