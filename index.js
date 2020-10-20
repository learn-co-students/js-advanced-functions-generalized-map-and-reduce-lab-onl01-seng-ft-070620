// pry = require('pryjs')

function map(sourceArray, afunction) {
    let newArray = []
    for (let element of sourceArray) {
        newArray.push(afunction(element))
    }
    return newArray
}

function reduce(sourceArray, afunction, startingPoint=0) {
    let result = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i<sourceArray.length; i++) {
        result = afunction(sourceArray[i], result)
    }
    return result
 }