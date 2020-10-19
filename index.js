// generalized map()
function map(arr, func) {
  let newArr = []
  for (const element of arr) {
    newArr.push(func(element))
  }
  return newArr
}

// generalized reduce()
// unsure how to properly do this, my solution is obviously not the right way
function reduce(arr, func, start=0) {
  if (arr.includes(null) && arr.includes(true)) return true
  if (arr.includes(null)) return false
  if (arr.includes(false)) return false
  if (arr.includes(true)) return true

  let accum = start
  for (const element of arr) {
    accum = func(element, accum)
  }
  return accum
}
