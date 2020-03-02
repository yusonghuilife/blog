Array.prototype.map = function (cb, thisArgs) {
  const arr = this
  const res = []
  if (!(arr instanceof Array)) throw new Error('map must be called by an array !')
  if (typeof cb !== 'function') throw new Error('cb must be a function')
  for (let i = 0; i < arr.length; i++) {
    res.push(cb.call(thisArgs,arr[i]))
  }
  return res
}
