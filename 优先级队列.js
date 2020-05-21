class PriorityQueue {
  constructor() {
    //数组，入队的元素保存在这里，
    //每进行一次入队或出队操作，都需重新调整数组为大顶堆
    this.arr = []
  }
  enqueue(val, prior) {
    this.arr.push({ val, prior })

    let cur = this.arr.length - 1
    let temp = this.arr[cur]

    // 对刚入队的那个元素实施上浮操作，即重新调整数组为大顶堆
    for (let i = Math.floor(cur - 1) / 2; i > 0; i = Math.floor(i - 1) / 2) {
      if (temp.prior > this.arr[i].prior) {
        this.arr[cur] = this.arr[i]
        cur = i
      } else {
        break
      }
    }

    this.arr[cur] = temp
  }

  dequeue() {
    if (this.arr.length === 0) throw new Error("队列为空，不能出队")
    // 将第一个元素的值缓存，以便返回
    let res = this.arr[0].val

    // 用队尾元素元素覆盖第一个元素
    this.arr[0] = this.arr[this.arr.length - 1]

    // 将队列长度-1
    this.arr.length -= 1

    // 重新调整队列为大顶堆
    let cur = 0
    let len = this.arr.length
    let temp = this.arr[0]
    for (let i = 2 * cur + 1; i < len; i = 2 * cur + 1) {
      // 左右节点大小比较
      if (i + 1 < len && this.arr[i].prior < this.arr[i + 1].prior) {
        i++
      }

      // 如果优先级小，向下移
      if (temp.prior < this.arr[i].prior) {
        this.arr[cur] = this.arr[i]
        cur = i
      } else {
        break
      }
    }

    this.arr[cur] = temp
    return res
  }
}
