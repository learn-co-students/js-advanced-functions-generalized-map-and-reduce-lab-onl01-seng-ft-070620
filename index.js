pry = require('pryjs')

function map(array, func) {
    let answer = []

    for (let i = 0; i < array.length; i ++) {
        answer.push(func(array[i]))
    }

    return answer
}

function reduce(array, func, start) {
    let r = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        r = func(array[i], r)
    }

    return r;
}