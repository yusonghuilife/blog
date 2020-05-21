function Person(name, age) {
  this.name = name
  this.age = age
}

//构建一个原型对象
Person.prototype = (function () {
  /******私有方法定义*****/

  //通过var定义
  var toStr = function () {
    return this.name + ' is ' + this.age
  }

  //直接定义
  function privateMethod() {
    console.log('in private method')
  }

  return {
    //返回的这个函数会返回一个原型对象
    constructor: Person, //把原型的constructor属性设置到正确的构造函数

    /*******公有方法*******/
    printInfo: function () {
      console.log('printing info:', toStr.call(this))
    },

    publicMethod: function () {
      privateMethod.call(this)
    },
  }
})() //注意这里的括号表示立刻执行此匿名函数，返回原型对象

//test case
var p = new Person('Jaskey', 24)
p.printInfo() //printing info: Jaskey is 24
p.publicMethod() // in private method
p.toStr() //"undefined is not a function"
