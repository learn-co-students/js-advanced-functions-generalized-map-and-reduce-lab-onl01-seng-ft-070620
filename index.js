function map(array, callback) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

function reduce(array, callback, starting) {
  let total = (!!starting) ? starting : array[0]
  let i = (!!starting) ? 0 : 1
  for (; i < array.length; i++) {
    total = callback(array[i], total);
  }
  return total;
}