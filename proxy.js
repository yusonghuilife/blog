function createArr(...element) {
  let target = []
  target.push(...element)
  const handler = {
    get(target, propertyKey) {
      propertyKey = Number(propertyKey) // 注意properykey为字符串
      if (propertyKey < 0) {
        return target[target.length + propertyKey]
      }
      return target[propertyKey]
    }
  }
  return new Proxy(target, handler)
}

const arr = createArr(1,2,3,4)

const pipe =  function (value) {
    const funcStack = [];
    const proxy = new Proxy({} , {
      get : function (pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fn(val);
          },value);
        }
        funcStack.push(window[fnName]);
        return proxy;
      }
    });

    return proxy;
  }

const double = n => n * 2;
const pow    = n => n * n;
const reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get; // 63
