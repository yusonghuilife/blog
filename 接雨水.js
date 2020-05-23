// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

const sumRain = (height) => {
  let sum = 0
  let max_left = 0
  let max_right = 0
  let left = 1
  let right = height.length - 2 // 加右指针进去
  for (let i = 1; i < height.length - 1; i++) {
    //从左到右更
    if (height[left - 1] < height[right + 1]) {
      max_left = Math.max(max_left, height[left - 1])
      let min = max_left
      if (min > height[left]) {
        sum = sum + (min - height[left])
      }
      left++
      //从右到左更
    } else {
      max_right = Math.max(max_right, height[right + 1])
      let min = max_right
      if (min > height[right]) {
        sum = sum + (min - height[right])
      }
      right--
    }
  }
  return sum
}
