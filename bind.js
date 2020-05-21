Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== 'function') {
    return ''
  }
  let fn = Symbol()
  context[fn] = this
  return function F(...args2) {
    if (this instanceof F) {
      return new context[fn](...args1, ...args2)
    }
    return context[fn]([...args1].concat([...args2]))
  }
}

obj = {
  name: 'hys',
}

function printName() {
  console.log(this.name)
}

console.log(printName.myBind(obj)())
