// Add your functions here
function map(array, f) {
    let ans = []
    array.forEach(e => ans.push(f(e)))
    return ans
}

function reduce(source, f, start) {
    let starting = (!!start) ? start : source[0]
    let i = (!!start) ? 0 : 1
    for(; i < source.length; i++) {
        starting = f(source[i], starting)
    }
    return starting
}