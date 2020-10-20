function map(arr, func) {
    let newArr = []
    for (const element of arr) {
      newArr.push(func(element))
    }
    return newArr
  }

//   function reduce(arr, callback, startingPoint = 0) {
//       return arr.reduce((callback) => {
//           return callback
//       }, startingPoint);
//   }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }