Array.prototype.reduce = function (cb, initialVal) {
  const arr = this
  let result = initialVal ? initialVal : arr[0]
  for (let i = initialVal ? 0 : 1; i < arr.length; i++) {
    result = cb(result, arr[i], i, arr)
  }
  return result
}

// total, currentValue, index, arr
Array.prototype.map = function (cb, thisArgs) {
  const arr = this
  return arr.reduce((total,current, index, thisArgs) => {
    total.push(cb(current,index,arr))
    return total
  },[])
};

