Function.prototype.mybind = function (context, ...args1) {
  let fn = this
  return function F(...args2) {
    if (this instanceof F) {
      let ins = new fn(...args1, ...args2)
      F.prototype = Object.create(fn.prototype)
      return Object.setPrototypeOf(ins, F.prototype)
    }
  }
}
// 实现mybind方法，打印出success
function Animal(name, color) {
  this.name = name
  this.color = color
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`
}

const Cat = Animal.mybind(null, "cat")
const cat = new Cat("white")
if (
  cat.say() === "I'm a white cat" &&
  cat instanceof Cat &&
  cat instanceof Animal
) {
  console.log("success")
}
