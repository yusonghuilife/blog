/*
 * @Author: yusonghu
 * @Date: 2020-05-20 17:21:26
 * @LastEditTime: 2020-05-24 16:30:04
 * @LastEditors: yusonghu
 * @Description:
 * @FilePath: /blog/bitmap.js
 */

const BitMap = function () {
  this.data = []
}

// 32位一个整数
BitMap.prototype.getIdx = (num) => parseInt(num / 32)
BitMap.prototype.getPos = (num) => num % 32

BitMap.prototype.add = function (num) {
  const index = this.getIdx(num)
  const pos = this.getPos(num)

  if (this.data[index] === undefined) this.data[index] = 0
  this.data[index] = Math.pow(2, pos)
}

BitMap.prototype.exist = function (num) {
  const index = this.getIdx(num)
  const pos = this.getPos(num)

  return this.data[index] && this.data[index] & Math.pow(2, pos)
}
