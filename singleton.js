const Person = function (name) {
  this.name = name
}

const singleton = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new Person()
    }
    return instance
  }
})()

// test
const o1 = singleton()
const o2 = singleton()
console.log(o1 === o2)
