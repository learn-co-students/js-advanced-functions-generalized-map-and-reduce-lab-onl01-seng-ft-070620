// Add your functions here
function map(array, mapper)
{
    let newArray = []
    for(let thing of array)
    {
        newArray.push(mapper(thing))
    }
    return newArray
}

function reduce(array, reducer, starting = array[0])
{
    let total = starting
    for(let thing of array)
    {
        if (thing != array[0] || starting != array[0])
        {
            total = reducer(thing, total)
            console.log(total)
        }
        
    }
    return total
}
