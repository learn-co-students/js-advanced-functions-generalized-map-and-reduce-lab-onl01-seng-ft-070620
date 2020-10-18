// Add your functions here

function map(source, cb) {
    let r = []

    for (let i = 0; i < source.length; i++) {
        let theElement = source[i]
        r.push(cb(theElement))
    }
    return r
}

function reduce(source, cb, start) {
    let r = (!!start) ? start : source[0]
    let i = (!!start) ? 0 : 1

    for (; i < source.length; i++) {
        r = cb(source[i], r)
    }
    return r
}