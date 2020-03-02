function Instanceof (value, constructor) {
  let ptoto = Object.getPrototypeOf(value);
  while (true){
    if (ptoto === null) return false
    if (ptoto === constructor.prototype) return true
    ptoto = Object.getPrototypeOf(ptoto)
  }
}

console.log(Instanceof('sbc', String))
console.log('adas' instanceof Object)
console.log(Object.getPrototypeOf('abc'))
console.log('abc'.__proto__)
// 注意，基本类型用__proto__与getPrototypeOf是可以找到构造函数的，所以Instanceof可用
// 但是原生instanceof找不到它的构造函数