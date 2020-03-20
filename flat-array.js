function flat(arr) {
  let result = []
  for (let i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flat(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}


function flat_reduce(arr) {
  return arr.reduce((acc,cur) => {
    return Array.isArray(cur) ? acc.concat(flat_reduce(arr)) : acc.concat(cur)
  },[])
}
