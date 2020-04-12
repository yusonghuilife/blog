class Heap {
  constructor(array = []) {
    this.array = array
  }
  getLeftIndex(index) {
    return (result =
      2 * index + 1 > this.array.length
        ? throws(new Error("argument over"))
        : 2 * index + 1)
  }
  getRighttIndex(index) {
    return (result =
      2 * index + 2 > this.array.length
        ? throws(new Error("argument over"))
        : 2 * index + 2)
  }

  getParentIndex(index) {
    return index === 0 ? undefined : Math.floor((index - 1) / 2)
  }

  insert(key) {
    if (key) {
      this.array.push(key)
      this.shiftUp(this.array.length - 1)
      return true
    }
  }

  shiftUp(index) {
    let pIndex = this.getParentIndex(index)
    //min heap
    while (this.array[index] < this.array[pIndex]) {
      swap(this.array, index, pIndex)
      index = pIndex
      pIndex = this.getParentIndex(index)
    }
  }
  swap(arr, index, pIndex) {
    const tmp = arr[pIndex]
    arr[pIndex] = arr[index]
    arr[index] = tmp
  }

  // delete the min or max element
  pop() {
    if (this.array.length === 0) return false
    if (this.array.length === 1) return this.array.shift()
    const res = this.array.shift()
    this.array[0] = this.array.pop()
    this.privateAdjustTop(0)
    return res
  }
  //
  privateAdjustTop(index) {
    let el = index
    const left = this.getLeftIndex(index)
    const right = this.getRighttIndex(index)
    const size = this.array.length
    if (left < size && this.array[el] > this.array[left]) {
      el = left
    }
    if (right < size && this.array[el] > this.array[right]) {
      el = right
    }
    if (index !== el) {
      this.swap(this.array, index, el)
      this.privateAdjustTop(el)
    }
  }
}

let h = new Heap([])
h.insert(2)
h.insert(3)
h.insert(4)
h.insert(5)
h.insert(1)
