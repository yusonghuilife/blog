const __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
            function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p] }
    return extendStatics(d, b)
  }
  return function (d, b) {
    if (typeof b !== 'function' && b !== null) { throw new TypeError('Class extends value ' + String(b) + ' is not a constructor or null') }
    extendStatics(d, b)
    function __ () { this.constructor = d }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
  }
})()
const Person = /** @class */ (function () {
  function Person (name) {
    // 原型方法
    // 即 Person.prototype.getName = function() { }
    // 下面可以简写为 getName() {...}
    this.getName = function () {
      console.log('Person:', this.name)
    }
    this.name = name
  }
  return Person
}())
const Gamer = /** @class */ (function (_super) {
  __extends(Gamer, _super)
  function Gamer (name, age) {
    const _this =
        // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
        _super.call(this, name) || this
    _this.age = age
    return _this
  }
  return Gamer
}(Person))
const asuna = new Gamer('Asuna', 20)
asuna.getName() // 成功访问到父类的方法
