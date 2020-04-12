function getMinInRotateArray(arr) {
  let left = 0,
    right = arr.length - 1
  let mid
  while (right - left > 1) {
    mid = left + Math.floor((right - left) / 2)
    console.log("mid is ", mid)
    if (arr[left] > arr[mid]) {
      right = mid
    } else {
      left = mid
    }
  }
  return Math.min(arr[left], arr[right])
}

console.log(getMinInRotateArray([3, 4, 5, 6, 7, 1, 2]))
