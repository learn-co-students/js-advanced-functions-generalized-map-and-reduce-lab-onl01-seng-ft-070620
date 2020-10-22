function map(arr, func) {
  const result = []

  arr.forEach(element => {
    result.push(func(element))
  })
  return result
}

function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}