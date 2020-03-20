Function.prototype.apply = function (thisArgs = window, arr) {
  const func = Symbol()
  thisArgs[func] = this
  const result = thisArgs[func](...arr)
  delete thisArgs[func]
  return result
}

Function.prototype.call = function(thisArgs = window, ...args) {
  const func = Symbol()
  thisArgs[func] = this
  const result = thisArgs[func](...args)
  delete thisArgs[func]
  return result
}

Function.prototype.bind = function (thisArgs = window, ...args) {
  const func = this
  return function F(...args1) {
    if (this instanceof F) {
      return new func(...args,...args1)
    }
    return func.call(thisArgs,...args,...args1)
  }
}
